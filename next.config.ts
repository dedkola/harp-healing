
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Required for OpenNext
  images: {
    unoptimized: true, // Required for Cloudflare
  },
};

export default nextConfig;
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // Acknowledge we're using Turbopack (Next.js 16 default)
//   turbopack: {},
  
//   // Standard page extensions
//   pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
// };

// export default nextConfig;