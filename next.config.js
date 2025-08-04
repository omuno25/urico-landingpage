/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
