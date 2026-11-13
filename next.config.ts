import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/services", destination: "/projects", permanent: true },
      { source: "/products", destination: "/projects", permanent: true },
    ];
  },
};

export default nextConfig;
