/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
  // i18n,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
