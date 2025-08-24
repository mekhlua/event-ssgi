/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'event-ssgi-4.onrender.com',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'th.bing.com',
        port: '',
        pathname: '/th/id/**',
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: '',
        pathname: '/**', // Allow all paths from freepik
      },
    ],
  },
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
}

module.exports = nextConfig