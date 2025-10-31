import type { Metadata } from "next";
import "./globals.css";
import { openSans, lato, ebGaramond, raleway } from '@/app/ui/fonts';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';


export const metadata: Metadata = {
  title: "CRYSTAL HARP HEALING",
  description: "Heading Vibrational therapy for emotional balance, deep rest, and inner alignment.",
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/favicon.ico' }
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
        ]
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${lato.variable} ${ebGaramond.variable} ${raleway.variable}`}>
    <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:image" content="/opengraph-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://example.com/opengraph-image.png" />
    </Head>

      <body suppressHydrationWarning className={`antialiased`}>{children}         <Analytics />         <SpeedInsights />
  </body>
    </html>
  );
}
