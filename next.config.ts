import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3v0px0pttie1i.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
