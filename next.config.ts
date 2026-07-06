import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    resolveAlias: {
      "gpu.js": "./app/lib/gpu-js.ts",
    },
  },
};

export default nextConfig;
