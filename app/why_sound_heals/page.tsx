import { Footer } from '@/components/sections/Footer'
import React from 'react'
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
        url: 'https://www.crystalharphealing.com/hero.png',
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
    images: ['https://www.crystalharphealing.com/hero.png'],
  },
}

export default function HowItWorks() {
  return (
    <main className="px-6">
      {/* Constrain header to the same centered, padded container as the hero */}
      <div className="mx-auto max-w-5xl">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>

        <h1 className="text-[2.2rem] sm:text-5xl md:text-7xl lg:text-8xl text-amber-800 mb-10 drop-shadow-sm !font-light md:!font-thin text-center my-8">
          The Science of Resonance, the Art of Stillness
        </h1>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="md:w-2/3 text-center text-amber-800 !font-thin space-y-4">
          <div className="h-px bg-gradient-to-r from-transparent via-[#c19a6b]/40 to-transparent mt-10"></div>
          <p className="pb-4 pt-4">
            Sound touches the parts of us that words cannot. The pure frequencies of the crystal
            harp entrain the body toward balance — calming the sympathetic nervous system and
            inviting parasympathetic safety.
          </p>

          <p className="">
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
      </div>
      <Footer />
    </main>
  )
}
