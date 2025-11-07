import React from 'react'
import { Footer } from '@/components/sections/Footer'
export default function ContactPage() {
  return (
    <main className="px-6">
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

          {/* Signup Form */}
          <form className="space-y-6 mt-8 mb-8">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-[#c19a6b]/30 bg-white/50 text-amber-900 placeholder:text-amber-800/50 focus:outline-none focus:ring-2 focus:ring-[#c19a6b]/50 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-[#c19a6b]/30 bg-white/50 text-amber-900 placeholder:text-amber-800/50 focus:outline-none focus:ring-2 focus:ring-[#c19a6b]/50 focus:border-transparent transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-[#e1bc8f] via-[#ecd8ae] to-[#e1bc8f] text-amber-900 font-medium rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
            >
              Join the Journey
            </button>
          </form>

          <div className="flex items-center justify-center gap-3 mt-6">
            <input
              type="checkbox"
              id="email-consent"
              name="consent"
              required
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
