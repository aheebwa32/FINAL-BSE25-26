/** @type {import('next').NextConfig} */
const nextConfig = {
  // Comment out these lines temporarily
  // output: 'export',
  // trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

module.exports = nextConfig