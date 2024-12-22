import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */  reactStrictMode: true,
  images: {
    domains: ['mail.babafaridgroup.edu.in',], // Add allowed image domains here
  },
};

export default nextConfig;
