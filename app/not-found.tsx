import Link from 'next/link'
import type { Metadata } from 'next'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Page Not Found | Crystal Harp Healing',
  description: 'The page you are looking for could not be found. Return to Crystal Harp Healing.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="px-6">
      <div className="mx-auto max-w-5xl min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10" />

        <h1 className="text-[2.2rem] sm:text-5xl md:text-7xl text-amber-800 drop-shadow-sm !font-light md:!font-thin my-8">
          Page Not Found
        </h1>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10" />

        <p className="text-xl text-amber-800 !font-thin mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <nav className="flex flex-col sm:flex-row gap-4 items-center" aria-label="Quick links">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-[#e1bc8f] via-[#ecd8ae] to-[#e1bc8f] text-amber-900 font-medium rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
          >
            Return Home
          </Link>
          <Link
            href="/offerings"
            className="text-amber-600 hover:text-amber-700 underline transition-colors"
          >
            View Offerings
          </Link>
          <Link
            href="/contact"
            className="text-amber-600 hover:text-amber-700 underline transition-colors"
          >
            Contact Us
          </Link>
        </nav>
      </div>
      <Footer />
    </main>
  )
}
