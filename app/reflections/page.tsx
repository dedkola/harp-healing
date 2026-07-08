import Image from 'next/image'
import type { Metadata } from 'next'
import TestimonialCard from '@/app/reflections/TestimonialCard'
import { testimonials } from '@/app/reflections/testimonials'
import { Footer } from '@/components/sections/Footer'
import { PageContainer, PageDivider, PageHeader, PageSplit } from '@/components/sections/page-shell'
import { BreadcrumbSchema, ReviewSchema } from '@/components/sections/StructuredData'

export const metadata: Metadata = {
  title: 'Client Testimonials | Crystal Harp Healing Reviews & Success Stories',
  description:
    'Read real testimonials from crystal harp healing clients. Discover how sound therapy helped with stress relief, emotional balance, trauma healing, and nervous system regulation. Verified reviews from real people.',
  keywords: [
    'sound healing testimonials',
    'crystal harp reviews',
    'sound therapy success stories',
    'healing testimonials',
    'client reviews sound healing',
    'vibrational therapy results',
    'psycho-sound healing feedback',
  ],
  openGraph: {
    title: 'Client Testimonials - Crystal Harp Healing',
    description:
      'Real stories from clients who experienced transformation through crystal harp healing. Read how sound therapy helped with stress, anxiety, and emotional balance.',
    url: 'https://www.crystalharphealing.com/reflections',
    siteName: 'Crystal Harp Healing',
    images: [
      {
        url: 'https://www.crystalharphealing.com/testimonials.webp',
        width: 1200,
        height: 630,
        alt: 'Crystal Harp Healing Client Testimonials',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Testimonials - Crystal Harp Healing',
    description:
      'Real transformation stories from crystal harp healing clients. Discover the power of sound therapy.',
    images: ['https://www.crystalharphealing.com/testimonials.webp'],
  },
  alternates: {
    canonical: 'https://www.crystalharphealing.com/reflections',
  },
}

const introDividerClassName = 'mx-auto mt-4 w-20 md:mx-0 md:w-36 md:max-w-[720px] lg:w-72'

export default function Testimonials() {
  return (
    <main className="px-6">
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.crystalharphealing.com' },
          { name: 'Reflections', url: 'https://www.crystalharphealing.com/reflections' },
        ]}
      />
      <ReviewSchema />

      <PageHeader title="What People Feel" />

      <PageSplit>
        <div className="space-y-4 text-left text-amber-800 !font-thin md:w-2/3">
          <h2 className="pb-2 pt-2 text-center text-4xl text-amber-800 !font-thin md:text-left">
            Echoes from the Heart
          </h2>
          <PageDivider className={introDividerClassName} />

          <blockquote className="mt-4 max-w-2xl border-l-4 border-amber-300 pl-6 text-lg text-amber-800 !font-normal ![font-family:var(--font-open-sans)] md:pl-8 md:text-xl">
            <p>
              Each client’s experience is unique, but the essence is the same — deeper presence,
              release, and renewal.
            </p>
          </blockquote>
        </div>

        <div className="md:w-1/3 md:flex-shrink-0">
          <Image
            src="/testimonials.webp"
            alt="Crystal harp sound healing session testimonials and client experiences"
            width={3857}
            height={3944}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </PageSplit>

      <PageContainer className="mt-10 space-y-10">
        {testimonials.map((testimonial, index) => (
          <div key={`${testimonial.author}-${index}`} className="space-y-10">
            <TestimonialCard {...testimonial} />
            {index < testimonials.length - 1 ? <PageDivider /> : null}
          </div>
        ))}
      </PageContainer>

      <Footer />
    </main>
  )
}
