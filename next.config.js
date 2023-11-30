/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV !== 'development',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.rawg.io',
      },
    ],
  },
  webpack(config) {
    // for svg image import
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig
