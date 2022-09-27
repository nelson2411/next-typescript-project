/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://flagcdn.com/w320"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
