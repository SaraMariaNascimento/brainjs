import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      "gpu.js": "./app/lib/gpu-js-stub.ts",
    },
  },
};

export default nextConfig;
