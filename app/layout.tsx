import type { Metadata } from "next";
import "./globals.css";
import { openSans, lato, ebGaramond, raleway } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "Harp Healing",
  description: "Harp Healing Welness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${lato.variable} ${ebGaramond.variable} ${raleway.variable}`}>
      <body suppressHydrationWarning className={`antialiased`}>{children}</body>
    </html>
  );
}
