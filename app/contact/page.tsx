import React from 'react'
import { Footer } from '@/components/sections/Footer'
export default function ContactPage() {
  return (
    <main className="px-6">
      {/* Constrain header to the same centered, padded container as the hero */}
      <div className="mx-auto max-w-5xl">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>

        <h1 className="text-[2.2rem] sm:text-5xl md:text-7xl lg:text-8xl text-amber-800 mb-10 drop-shadow-sm !font-light md:!font-thin text-center my-8">
          Begin Your Resonance Journey
        </h1>

        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10"></div>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="md:w-2/3 text-center text-amber-800 !font-thin space-y-4">
          <h2 className="text-4xl text-amber-800 !font-thin pb-2 pt-2">
            Ready to reconnect with your inner harmony?
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>
          <p className="pb-4 pt-4">
            Whether you’re seeking grounding, spiritual clarity, or restorative calm, sound can
            guide you home to yourself
          </p>

          <p className="">For session inquiries or to learn more, you can contact me directly.</p>

          <p className="pb-2">
            <span className="mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-amber-800 !font-thin">
              <a
                href="mailto:example@email.com"
                className="flex items-center gap-3 text-amber-600 hover:text-amber-700 transition-colors"
                aria-label="Email example"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-amber-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="6" width="18" height="12" rx="2" />
                  <path d="M3 8.5L12 13l9-4.5" />
                </svg>
                <span className="underline">{`example@email.com`}</span>
              </a>

              <span className="hidden sm:block text-amber-400">·</span>

              <a
                href="tel:+11234567890"
                className="flex items-center gap-3 text-amber-600 hover:text-amber-700 transition-colors"
                aria-label="Call +1 (123) 456-7890"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-amber-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.97.36 1.92.72 2.82a2 2 0 0 1-.45 2.11L8.91 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.36 1.85.6 2.82.72A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="underline">+1 (123) 456-7890</span>
              </a>
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
