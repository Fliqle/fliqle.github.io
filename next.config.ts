import type { NextConfig } from "next";
import { basePath } from "./app/base-path";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
