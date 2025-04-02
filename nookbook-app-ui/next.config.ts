import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dodo.ac',
        port: '',
        pathname: '/np/images/**',
        search: '',
      },
    ],
  },
}

export default nextConfig;
