/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "di-food-ordering.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "www.cicis.com",
      },
    ],
  },
};

module.exports = nextConfig;
