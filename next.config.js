/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'crumbl.video',
        port: '',
        pathname: '/cdn-cgi/**',
      },
    ],
  },
}

module.exports = nextConfig
