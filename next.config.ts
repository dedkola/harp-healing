import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Vercel injects a build adapter that conflicts with standalone output in Next.js 16.3.
  output: process.env.VERCEL ? undefined : 'standalone',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
