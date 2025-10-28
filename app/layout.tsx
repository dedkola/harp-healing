import type { Metadata } from "next";
import "./globals.css";
// import { playfair } from '@/app/ui/fonts';
import { inter } from '@/app/ui/fonts';



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
    <html lang="en">
    <body className={`${inter.className} antialiased`}>{children}</body>

    </html>
  );
}
