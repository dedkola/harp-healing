import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function unauthorized(message: string) {
  return new NextResponse(message, {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Protected Dashboard"',
      'Cache-Control': 'no-store',
    },
  })
}

function unavailable() {
  return new NextResponse('Authentication is not configured', {
    status: 503,
    headers: {
      'Cache-Control': 'no-store',
    },
  })
}

function decodeBase64(value: string): string | null {
  if (typeof Buffer !== 'undefined') {
    try {
      return Buffer.from(value, 'base64').toString('utf-8')
    } catch {
      // Fall through to Web API decoding.
    }
  }

  if (typeof atob === 'function') {
    try {
      const binary = atob(value)
      const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))
      return new TextDecoder().decode(bytes)
    } catch {
      return null
    }
  }

  return null
}

function safeEqual(actual: string, expected: string): boolean {
  const encoder = new TextEncoder()
  const actualBytes = encoder.encode(actual)
  const expectedBytes = encoder.encode(expected)
  const length = Math.max(actualBytes.length, expectedBytes.length)
  let difference = actualBytes.length ^ expectedBytes.length

  for (let index = 0; index < length; index += 1) {
    difference |= (actualBytes[index] ?? 0) ^ (expectedBytes[index] ?? 0)
  }

  return difference === 0
}

export function middleware(request: NextRequest) {
  const isProtectedRoute =
    request.nextUrl.pathname.startsWith('/dashboard') ||
    request.nextUrl.pathname.startsWith('/api/users')

  if (isProtectedRoute) {
    const validUsername = process.env.BASIC_AUTH_USER
    const validPassword = process.env.BASIC_AUTH_PASS

    if (!validUsername || !validPassword) {
      return unavailable()
    }

    const authHeader = request.headers.get('authorization')

    if (!authHeader || !authHeader.startsWith('Basic ')) {
      return unauthorized('Authentication required')
    }

    const base64Credentials = authHeader.slice('Basic '.length)
    const credentials = decodeBase64(base64Credentials)

    if (!credentials) {
      return unauthorized('Invalid credentials')
    }

    const separatorIndex = credentials.indexOf(':')
    if (separatorIndex < 0) {
      return unauthorized('Invalid credentials')
    }

    const username = credentials.slice(0, separatorIndex)
    const password = credentials.slice(separatorIndex + 1)

    if (!safeEqual(username, validUsername) || !safeEqual(password, validPassword)) {
      return unauthorized('Invalid credentials')
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/users/:path*'],
}
