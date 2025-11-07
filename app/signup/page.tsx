'use client'

import React, { useState } from 'react'
import { Footer } from '@/components/sections/Footer'
import Script from 'next/script'

// Extend Window interface for TypeScript
declare global {
  interface Window {
    grecaptcha?: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', consent: false })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.consent) {
      setStatus('error')
      setMessage('Please agree to receive emails before submitting.')
      return
    }

    if (!formData.name || !formData.email) {
      setStatus('error')
      setMessage('Please fill in all fields.')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      // Execute reCAPTCHA
      if (!window.grecaptcha) {
        throw new Error('reCAPTCHA not loaded')
      }

      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha!.execute(
            process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
            { action: 'submit' }
          )

          // Submit form with token
          const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formData, recaptchaToken: token }),
          })

          const data = await response.json()

          if (response.ok) {
            setStatus('success')
            setMessage(data.message || 'Successfully registered!')
            setFormData({ name: '', email: '', consent: false })
          } else {
            setStatus('error')
            setMessage(data.error || 'Failed to register')
          }
        } catch (error) {
          setStatus('error')
          setMessage('An error occurred. Please try again.')
          console.error('Signup error:', error)
        }
      })
    } catch (error) {
      setStatus('error')
      setMessage('reCAPTCHA failed to load. Please refresh and try again.')
      console.error('reCAPTCHA error:', error)
    }
  }

  return (
    <main className="px-6">
      {/* Load reCAPTCHA v3 Script - Invisible/Automatic */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />

      {/* Constrain header to the same centered, padded container as the hero */}
      <div className="mx-auto max-w-5xl">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>

        <h1 className="text-[2.2rem] sm:text-5xl md:text-7xl lg:text-8xl text-amber-800 mb-10 drop-shadow-sm !font-light md:!font-thin text-center my-8">
          Experience calm, clarity, and nervous-system balance
        </h1>

        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="md:w-2/3 text-center text-amber-800 !font-thin space-y-4">
          <h2 className="text-4xl text-amber-800 !font-thin pb-2 pt-2">
            Join for session openings, meditations, and workshops.
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
              {message}
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
              {message}
            </div>
          )}

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mt-8 mb-8">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-[#c19a6b]/30 bg-white/50 text-amber-900 placeholder:text-amber-800/50 focus:outline-none focus:ring-2 focus:ring-[#c19a6b]/50 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-[#c19a6b]/30 bg-white/50 text-amber-900 placeholder:text-amber-800/50 focus:outline-none focus:ring-2 focus:ring-[#c19a6b]/50 focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#e1bc8f] via-[#ecd8ae] to-[#e1bc8f] text-amber-900 font-medium rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Submitting...' : 'Join the Journey'}
            </button>
          </form>

          <div className="flex items-center justify-center gap-3 mt-6">
            <input
              type="checkbox"
              id="email-consent"
              name="consent"
              required
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              className="w-5 h-5 rounded border-2 border-[#c19a6b]/50 bg-white/50 text-[#c19a6b] focus:ring-2 focus:ring-[#c19a6b]/50 focus:ring-offset-0 cursor-pointer transition-all checked:bg-[#c19a6b] checked:border-[#c19a6b] accent-[#c19a6b]"
            />
            <label
              htmlFor="email-consent"
              className="text-2xl !font-thin text-amber-800 cursor-pointer"
            >
              I agree to receive emails and understand I can unsubscribe anytime.
            </label>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
