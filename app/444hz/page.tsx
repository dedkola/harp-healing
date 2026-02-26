import { Footer } from '@/components/sections/Footer'
import type { Metadata } from 'next'
import { PersonSchema, BreadcrumbSchema } from '@/components/sections/StructuredData'

export const metadata: Metadata = {
  title: 'What Is 444 Hz Sound Healing? - Crystal Harp Healing Practitioner | Psycho-Sound Healing',
  description:
    'Sound healing works through vibration. Every cell in the body responds to frequency, and when exposed to coherent sound waves, the nervous system begins to calm, the breath deepens, and the body shifts toward balance.',
  keywords: [
    'Zhenya sound healer',
    'psycho-sound healing',
    'crystal harp practitioner',
    'sound healing therapist',
    'vibrational therapy specialist',
    'trauma-informed sound healing',
    'psychotherapy and sound healing',
  ],
  openGraph: {
    title: 'What Is 444 Hz Sound Healing? - Crystal Harp Healing Practitioner',
    description:
      'Sound healer with psychotherapy background offering psycho-sound healing sessions for emotional balance and nervous system regulation.',
    url: 'https://www.crystalharphealing.com/about',
    siteName: 'Crystal Harp Healing',
    images: [
      {
        url: 'https://www.crystalharphealing.com/about_me.webp',
        width: 1200,
        height: 630,
        alt: 'Zhenya - Crystal Harp Healing Practitioner',
      },
    ],
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Zhenya - Crystal Harp Healing Practitioner',
    description:
      'Sound healer with psychotherapy background offering psycho-sound healing sessions for emotional balance.',
    images: ['https://www.crystalharphealing.com/about_me.webp'],
  },
  alternates: {
    canonical: 'https://www.crystalharphealing.com/about',
  },
}

export default function FourFourFourHzPage() {
  return (
    <main className="px-6">
      <PersonSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.crystalharphealing.com' },
          { name: 'About', url: 'https://www.crystalharphealing.com/444hz' },
        ]}
      />

      {/* Page Title */}
      <div className="mx-auto max-w-5xl">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10" />

        <h1 className="text-[2.2rem] sm:text-5xl md:text-7xl lg:text-8xl text-amber-800 drop-shadow-sm !font-light md:!font-thin text-center my-8">
          What Is 444 Hz Sound Healing?
        </h1>

        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mb-10" />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto text-amber-800 !font-thin space-y-12 pb-16">
        {/* Section 1 — Vibration */}
        <section className="space-y-4">
          <p className="text-lg leading-relaxed">
            Sound healing works through vibration. Every cell in the body responds to frequency, and
            when exposed to coherent sound waves, the nervous system begins to calm, the breath
            deepens, and the body shifts toward balance.
          </p>
          <p className="text-lg leading-relaxed">
            I tune my crystal harp to <strong className="font-normal">444 Hz</strong> — a
            stabilizing and strengthening frequency that supports:
          </p>
          <ul className="space-y-2 pl-6 text-base leading-relaxed list-none">
            {[
              'Deep relaxation and stress reduction',
              'Emotional grounding and clarity',
              'Enhanced meditation and mindfulness',
              "Support for the body's natural self-healing processes",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-700/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed">
            444 Hz carries a slightly elevated vibrational field that encourages both relaxation and
            inner strength.
          </p>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent" />

        {/* Section 2 — Crystal Harp */}
        <section className="space-y-4">
          <h2 className="text-3xl md:text-4xl !font-thin">The Power of the Crystal Harp</h2>
          <p className="text-lg leading-relaxed">
            My crystal harp is made from pure quartz crystal — a material known for its clarity and
            energetic conductivity. Quartz amplifies sound with exceptional purity, allowing
            vibration to travel deeply through the body.
          </p>
          <p className="text-lg leading-relaxed">During sessions, the 444 Hz resonance can:</p>
          <ul className="space-y-2 pl-6 text-base leading-relaxed list-none">
            {[
              'Help release stored tension',
              'Support energetic clearing',
              'Encourage emotional release',
              'Promote deep meditative states',
              'Create a safe and calming healing space',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-700/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed italic">
            The sound is not only heard — it is felt throughout the body.
          </p>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent" />

        {/* Section 3 — Why 444 Hz */}
        <section className="space-y-4">
          <h2 className="text-3xl md:text-4xl !font-thin">Why I Work With 444 Hz</h2>
          <p className="text-lg leading-relaxed">
            While 432 Hz is often associated with natural harmony, I intentionally work with 444 Hz
            because of its stabilizing and empowering qualities.
          </p>
          <p className="text-lg leading-relaxed">This frequency supports:</p>
          <ul className="space-y-2 pl-6 text-base leading-relaxed list-none">
            {[
              'Grounded awareness',
              'Mental clarity',
              'Emotional resilience',
              'Strong energetic alignment',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-700/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed">
            It allows clients not only to relax, but to reconnect with their inner strength.
          </p>
        </section>

        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent" />

        {/* Section 4 — Who This Is For */}
        <section className="space-y-4">
          <h2 className="text-3xl md:text-4xl !font-thin">Who This Is For</h2>
          <p className="text-lg leading-relaxed">Crystal Harp Healing is open to:</p>
          <ul className="space-y-2 pl-6 text-base leading-relaxed list-none">
            {[
              'Those navigating stress or burnout',
              'Individuals seeking emotional reset',
              'Meditation practitioners',
              'Anyone curious about frequency-based healing',
              'People who simply need space to pause',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-700/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed italic">
            No experience is required. Sound meets you where you are.
          </p>
        </section>
      </div>

      <Footer />
    </main>
  )
}
