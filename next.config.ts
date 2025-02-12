import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        API_BASE_URL: process.env.API_BASE_URL,
        ROUTE_HANDLER_BASE_URL: process.env.ROUTE_HANDLER_BASE_URL,
    },
    experimental: {
        ppr: true,
    },
};

export default nextConfig;
