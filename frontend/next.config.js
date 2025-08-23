/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['event-ssgi-4.onrender.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'event-ssgi-4.onrender.com',
        port: '',
        pathname: '/media/**',
      },
    ],
  },
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  // TypeScript specific settings (optional but recommended)
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: false, // Set to true only if you have type errors you can't fix immediately
  },
}

module.exports = nextConfig