/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rb.gy", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
