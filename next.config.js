
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      // Disable turbopack temporarily to avoid the error
      enabled: false
    }
  },
  // Ensure proper static file handling
  trailingSlash: false,
  images: {
    unoptimized: false,
  },
}

module.exports = nextConfig