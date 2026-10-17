import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [70, 75],
  },
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
