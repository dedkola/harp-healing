import Image from 'next/image'
import type { Metadata } from 'next'
import { Footer } from '@/components/sections/Footer'
import { PageContainer, PageDivider, PageHeader, PageSplit } from '@/components/sections/page-shell'
import { PersonSchema, BreadcrumbSchema } from '@/components/sections/StructuredData'

export const metadata: Metadata = {
  title: 'About Zhenya - Crystal Harp Healing Practitioner | Psycho-Sound Healing',
  description:
    'Meet Zhenya, a sound healer and psychotherapist specializing in psycho-sound healing. Combining crystal harp vibrational therapy with clinical psychology for emotional balance and nervous system regulation.',
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
    title: 'Meet Zhenya - Crystal Harp Healing Practitioner',
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

const sectionDividerClassName = 'mx-auto mt-4 w-20 md:mx-0 md:w-36 md:max-w-[720px] lg:w-72'

export default function AboutMePage() {
  return (
    <main className="px-6">
      <PersonSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://www.crystalharphealing.com' },
          { name: 'About', url: 'https://www.crystalharphealing.com/about' },
        ]}
      />
      <PageHeader title="Meet the Frequency Behind the Harp" />
      <PageSplit>
        <div className="space-y-4 text-left text-amber-800 !font-thin md:w-2/3">
          <h2 className="text-4xl text-amber-800 !font-thin text-center md:text-left pb-2 pt-2">
            Welcome, I’m Zhenya.
          </h2>
          <PageDivider className={sectionDividerClassName} />
          <p className="pb-4 pt-4">
            I’m a sound healer with a background in psychotherapy. Crystal Harp Healing was born
            from the meeting point between psychology, resonance, and the human heart.
          </p>

          <p className="pb-2">
            My sessions weave together the vibrational frequencies of the crystal harp with
            mindfulness, somatic awareness, and heart-centered presence to help you release tension,
            ground your body, and reconnect with your natural rhythm of peace.
          </p>

          <p className="pb-2">
            Drawing on my clinical training and experience as a psychotherapist, I integrate
            psychological insight and evidence-informed techniques—such as grounding, mindful
            inquiry, and somatic tracking—whenever sound evokes emotion, memory, or inner movement.
          </p>
          <p className="pb-2">
            This integrative process, which I call <b>psycho-sound healing</b>, bridges vibrational
            therapy with psychological attunement. Sound opens the body; reflection anchors the
            insight. Together, they invite harmony within the nervous system and a renewed sense of
            inner coherence.
          </p>
        </div>

        <div className="md:w-1/3 flex-shrink-0">
          <Image
            src="/about_me.webp"
            alt="Zhenya, Crystal Harp Healing practitioner and psychotherapist specializing in psycho-sound healing"
            width={4367}
            height={5287}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </PageSplit>
      <PageContainer className="!font-light">
        <PageDivider className={sectionDividerClassName} />
        <h2 className="text-4xl text-amber-800 !font-thin text-center md:text-left pb-2 pt-2">
          An Invitation
        </h2>

        <p className="pb-2">
          This practice is an invitation to tune inward— to experience sound not just as something
          you hear, but as something you feel, guiding you gently back to balance and wholeness.
        </p>
        <PageDivider className={sectionDividerClassName} />
      </PageContainer>
      <Footer />
    </main>
  )
}
