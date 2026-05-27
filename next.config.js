/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Disabled for dynamic marketplace features
  images: { unoptimized: true },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
