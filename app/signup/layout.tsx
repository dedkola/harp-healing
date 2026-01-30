import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join Crystal Harp Healing | Get Updates on Sessions & Workshops',
  description:
    'Sign up for Crystal Harp Healing updates. Receive notifications about session openings, guided meditations, and wellness workshops. Join our community for nervous system healing and inner peace.',
  keywords: [
    'sound healing signup',
    'crystal harp newsletter',
    'wellness workshops',
    'meditation sessions',
    'healing community',
    'sound therapy updates',
  ],
  openGraph: {
    title: 'Join Crystal Harp Healing Community',
    description:
      'Sign up for updates on sound healing sessions, meditations, and workshops. Join our community for nervous system balance and emotional wellness.',
    url: 'https://www.crystalharphealing.com/signup',
    images: [
      {
        url: 'https://www.crystalharphealing.com/hero.png',
        width: 1200,
        height: 630,
        alt: 'Join Crystal Harp Healing',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Join Crystal Harp Healing Community',
    description: 'Sign up for updates on sound healing sessions and wellness workshops.',
    images: ['https://www.crystalharphealing.com/hero.png'],
  },
}

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
