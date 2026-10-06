import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/e91a/live/4fd67510-c0be-11f1-babe-4199b0e7ccea.jpg.webp"
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ichef.bbci.co.uk',
      },
    ],
  },
};

export default nextConfig;
