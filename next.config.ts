import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        API_BASE_URL: "http://localhost:8000",
    },
    experimental: {
        ppr: "incremental",
    },
};

export default nextConfig;
