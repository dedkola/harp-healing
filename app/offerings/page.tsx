import { Footer } from '@/components/sections/Footer'
import { PageDivider, PageHeader, PageSplit } from '@/components/sections/page-shell'
import { BreadcrumbSchema } from '@/components/sections/StructuredData'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crystal Harp Healing Services | Individual & Group Sound Healing Sessions',
  description:
    'Personalized crystal harp healing sessions for stress relief, anxiety, and trauma recovery. Individual sessions (60-75 min), group sessions, workshops, and corporate events. Complimentary consultation available.',
  keywords: [
    'sound healing sessions',
    'crystal harp therapy',
    'individual sound healing',
    'group sound healing',
    'stress relief therapy',
    'anxiety treatment',
    'trauma recovery',
    'sound bath events',
    'corporate wellness',
    'nervous system regulation',
  ],
  openGraph: {
    title: 'Crystal Harp Healing Services - Individual & Group Sessions',
    description:
      'Experience personalized sound healing with crystal harp. Individual sessions, group sessions, and workshops for stress relief and emotional balance.',
    url: 'https://www.crystalharphealing.com/offerings',
    siteName: 'Crystal Harp Healing',
    images: [
      {
        url: 'https://www.crystalharphealing.com/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Crystal Harp Healing Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crystal Harp Healing Services',
    description:
      'Personalized sound healing sessions for stress relief, anxiety, and emotional balance. Individual & group sessions available.',
    images: ['https://www.crystalharphealing.com/hero.webp'],
  },
  alternates: {
    canonical: 'https://www.crystalharphealing.com/offerings',
  },
}

const offerings = [
  {
    title: 'Individual Sessions',
    description:
      '60–75 minute personalized sound healing with emotional regulation and gentle somatic attunement. Ideal for stress, anxiety, trauma recovery, or emotional imbalance.',
  },
  {
    title: 'Group Sessions',
    description:
      'Shared vibrational experience for families, friends, or circles. Supports connection, co-regulation, and shared peace.',
  },
  {
    title: 'Workshops and Corporate Events',
    description:
      'Public or private gatherings where crystal harp frequencies create deep meditative states and energetic clearing.',
  },
]

export default function Services() {
  return (
    <main className="px-6">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.crystalharphealing.com' },
          { name: 'Offerings', url: 'https://www.crystalharphealing.com/offerings' },
        ]}
      />
      <PageHeader title="Ways to Experience Healing" />

      <PageSplit className="justify-center">
        <div className="space-y-4 text-center text-amber-800 !font-thin md:w-2/3">
          <h2 className="text-4xl text-amber-800 !font-thin pb-2 pt-2">
            Every session is a sacred space for rest and renewal.
          </h2>

          <PageDivider className="mt-10" />

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {offerings.map((offering) => (
              <article
                key={offering.title}
                className="flex flex-col items-start gap-3 rounded-2xl border border-amber-200/30 bg-gradient-to-br from-white/70 to-amber-50/60 p-6 shadow-2xl ring-1 ring-amber-100 transition-shadow hover:shadow-[0_20px_40px_rgba(193,154,107,0.18)]"
              >
                <h4 className="text-xl text-amber-800 font-semibold md:text-2xl">
                  {offering.title}
                </h4>
                <p className="text-sm text-gray-800/90">{offering.description}</p>
              </article>
            ))}
          </div>

          <PageDivider className="mb-10" />
        </div>
      </PageSplit>
      <Footer />
    </main>
  )
}
