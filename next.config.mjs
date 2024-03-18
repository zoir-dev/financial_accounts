/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.moliyaviytahlil.uz",
      },
    ],
  },
};

export default nextConfig;
