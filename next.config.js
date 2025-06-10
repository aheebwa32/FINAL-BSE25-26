/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true, // For static export compatibility
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false, // Set to false to catch TypeScript errors
  },
  // Remove any conflicting configuration
  output: 'export', // For static export if needed
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig