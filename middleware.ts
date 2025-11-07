import { NextResponse, type NextRequest } from 'next/server'

export default function middleware(req: NextRequest) {
  // protect only this route
  if (!req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.next()
  }

  const authHeader = req.headers.get('authorization')

  // No auth sent -> request login popup
  if (!authHeader) {
    return new Response('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Protected Area"',
      },
    })
  }

  // Parse "Basic base64(user:pass)"
  const base64 = authHeader.split(' ')[1]
  const [user, pass] = Buffer.from(base64, 'base64').toString().split(':')

  const expectedUser = process.env.BASIC_AUTH_USER
  const expectedPass = process.env.BASIC_AUTH_PASS

  // Valid?
  if (user === expectedUser && pass === expectedPass) {
    return NextResponse.next()
  }

  // Wrong credentials
  return new Response('Access denied', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Protected Area"',
    },
  })
}

export const config = {
  matcher: ['/dashboard/:path*', '/dashboard'],
}
