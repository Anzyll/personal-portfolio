import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          }
        ]
      }
    ]
  },
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
    staticPageGenerationTimeout: 100,
  },
};

export default nextConfig;
