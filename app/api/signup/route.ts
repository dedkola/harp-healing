import 'server-only'
import { Prisma } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'
import { getPrisma } from '@/lib/prisma'

interface TurnstileResponse {
  success: boolean
  'error-codes'?: string[]
  challenge_ts?: string
  hostname?: string
}

interface SignupRequest {
  name?: unknown
  email?: unknown
  consent?: unknown
  turnstileToken?: unknown
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY

  if (!secretKey) {
    console.error('TURNSTILE_SECRET_KEY is not configured')
    return false
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: secretKey,
        response: token,
      }),
    })

    const data = (await response.json()) as TurnstileResponse
    return response.ok && data.success
  } catch (error) {
    console.error('Turnstile verification error:', error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json().catch(() => null)) as SignupRequest | null

    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: 'Request body must be valid JSON' }, { status: 400 })
    }

    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
    const turnstileToken = typeof body.turnstileToken === 'string' ? body.turnstileToken.trim() : ''

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    if (name.length > 100 || email.length > 254 || !EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ error: 'Enter a valid name and email address' }, { status: 400 })
    }

    if (body.consent !== true) {
      return NextResponse.json({ error: 'Email consent is required' }, { status: 400 })
    }

    if (!turnstileToken) {
      return NextResponse.json({ error: 'Verification token is required' }, { status: 400 })
    }

    const isValidToken = await verifyTurnstileToken(turnstileToken)
    if (!isValidToken) {
      return NextResponse.json({ error: 'Verification failed. Please try again.' }, { status: 403 })
    }

    const prisma = getPrisma()
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 409 })
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        consent: true,
      },
    })

    return NextResponse.json(
      {
        message: 'Successfully registered!',
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return NextResponse.json({ error: 'Email already registered' }, { status: 409 })
    }

    console.error('Signup error:', error)
    return NextResponse.json({ error: 'Failed to register user' }, { status: 500 })
  }
}
