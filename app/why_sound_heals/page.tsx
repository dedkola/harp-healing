import { Footer } from '@/components/sections/Footer'
import { PageDivider, PageHeader, PageSplit } from '@/components/sections/page-shell'
import { BreadcrumbSchema } from '@/components/sections/StructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Sound Heals | The Science of Vibrational Therapy & Nervous System Regulation',
  description:
    'Discover the science behind sound healing and crystal harp therapy. Learn how vibrational frequencies regulate the nervous system, support trauma recovery, and restore emotional balance through vagus nerve activation.',
  keywords: [
    'sound healing science',
    'vibrational therapy research',
    'nervous system regulation',
    'vagus nerve healing',
    'trauma-informed sound therapy',
    'neuroscience of sound healing',
    'parasympathetic activation',
    'sound frequency healing',
  ],
  openGraph: {
    title: 'Why Sound Heals - The Science of Vibrational Therapy',
    description:
      'Explore the neuroscience behind sound healing. Learn how crystal harp frequencies regulate the nervous system and support emotional balance.',
    url: 'https://www.crystalharphealing.com/why_sound_heals',
    siteName: 'Crystal Harp Healing',
    images: [
      {
        url: 'https://www.crystalharphealing.com/hero.webp',
        width: 1200,
        height: 630,
        alt: 'The Science of Sound Healing',
      },
    ],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Sound Heals - The Science of Vibrational Therapy',
    description:
      'Discover how sound healing works: neuroscience, vagus nerve regulation, and trauma recovery through vibration.',
    images: ['https://www.crystalharphealing.com/hero.webp'],
  },
  alternates: {
    canonical: 'https://www.crystalharphealing.com/why_sound_heals',
  },
}

export default function HowItWorks() {
  return (
    <main className="px-6">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.crystalharphealing.com' },
          { name: 'Why Sound Heals', url: 'https://www.crystalharphealing.com/why_sound_heals' },
        ]}
      />
      <PageHeader
        title="The Science of Resonance, the Art of Stillness"
        showBottomDivider={false}
      />

      <PageSplit className="justify-center">
        <div className="space-y-4 text-center text-amber-800 !font-thin md:w-2/3">
          <PageDivider className="mt-10" />
          <p className="pb-4 pt-4">
            Sound touches the parts of us that words cannot. The pure frequencies of the crystal
            harp entrain the body toward balance — calming the sympathetic nervous system and
            inviting parasympathetic safety.
          </p>

          <p>
            Neuroscience and trauma research affirm what ancient traditions have always known:
            vibration restores coherence.
          </p>

          <blockquote className="max-w-3xl mx-auto mt-4 bg-[#fff9f2]/60 border-l-4 border-amber-200 rounded-md px-6 py-6 text-amber-900 font-eb-garamond italic text-lg md:text-xl leading-relaxed shadow-sm">
            <div className="flex items-start gap-4">
              <p className="m-0">
                “Sound and rhythm offer the body a way to reestablish a sense of safety and
                connection.”
              </p>
            </div>

            <cite className="mt-3 block text-sm not-italic font-raleway text-amber-700 uppercase tracking-wide">
              — Bessel van der Kolk, 2014
            </cite>
          </blockquote>

          <p>
            In sessions, we use sound to regulate the vagus nerve, invite mindfulness, and cultivate
            emotional grounding.
          </p>
        </div>
      </PageSplit>
      <Footer />
    </main>
  )
}
