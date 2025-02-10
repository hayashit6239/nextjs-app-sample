import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        API_BASE_URL: "http://localhost:8000",
        ROUTE_HANDLER_BASE_URL: "http://localhost:3000/api",
    },
    experimental: {
        ppr: true,
    },
};

export default nextConfig;
