import type { Metadata } from "next";
import "./globals.css";
import { openSans, lato, ebGaramond, raleway } from '@/app/ui/fonts';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';


export const metadata: Metadata = {
  title: "Harp Healing",
  description: "Harp Healing Welness",
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
      <body suppressHydrationWarning className={`antialiased`}>{children}         <Analytics />         <SpeedInsights />
  </body>
    </html>
  );
}
