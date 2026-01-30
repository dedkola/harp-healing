import type { Metadata } from 'next'
import './globals.css'
import { openSans, lato, ebGaramond, raleway } from '@/app/ui/fonts'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';


import { Navbar } from '@/components/layout/Navbar'
import Script from 'next/script'
import { LocalBusinessSchema, WebsiteSchema } from '@/components/sections/StructuredData'

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
        url: 'https://www.crystalharphealing.com/hero.png',
        width: 1200,
        height: 630,
        alt: 'Crystal Harp Healing - Vibrational Therapy',
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
    images: ['https://www.crystalharphealing.com/hero.png'],
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
      <head>
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Viewport and theme */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#92400E" />
        <meta name="color-scheme" content="light" />

        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0N05J9MRPE" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0N05J9MRPE');
          `}
        </Script>
      </head>
      <body suppressHydrationWarning className={`antialiased`}>
        <LocalBusinessSchema />
        <WebsiteSchema />
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
