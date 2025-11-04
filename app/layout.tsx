import type { Metadata } from 'next'
import './globals.css'
import { openSans, lato, ebGaramond, raleway } from '@/app/ui/fonts'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Navbar } from '@/components/layout/Navbar'

export const metadata: Metadata = {
  title: 'CRYSTAL HARP HEALING',
  description:
    'Vibrational healing for emotional balance, nervous system regulation, and inner alignment.',
  keywords: [
    'Crystal Harp Healing',
    'Vibrational Therapy',
    'Emotional Balance',
    'Nervous System Regulation',
    'Inner Alignment',
    'Sound Healing',
    'Wellness',
    'Holistic Health',
    'Meditation',
    'Relaxation',
  ],
  authors: [{ name: 'Crystal Harp Healing', url: 'https://www.crystalharphealing.com/' }],
  creator: 'Crystal Harp Healing',
  publisher: 'Crystal Harp Healing',
  applicationName: 'CRYSTAL HARP HEALING',
  metadataBase: new URL('https://www.crystalharphealing.com/'),

  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },

  openGraph: {
    title: 'CRYSTAL HARP HEALING',
    description:
      'Vibrational healing for emotional balance, nervous system regulation, and inner alignment',
    url: 'https://www.crystalharphealing.com/',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
      },
    ],
    siteName: 'CRYSTAL HARP HEALING',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRYSTAL HARP HEALING',
    description:
      'Vibrational healing for emotional balance, nervous system regulation, and inner alignment',
    images: ['/hero.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${lato.variable} ${ebGaramond.variable} ${raleway.variable}`}
    >
      <body suppressHydrationWarning className={`antialiased`}>
        <Navbar />
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
