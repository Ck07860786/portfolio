import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */  reactStrictMode: true,
  images: {
    domains: ['mail.babafaridgroup.edu.in','assets.aceternity.com','thinknext.co.in','www.thinknext.co.in','cracent.com'], // Add allowed image domains here
  },
};

export default nextConfig;