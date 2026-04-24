import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Required for Cloudflare Pages / OpenNext adapter
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'ui-avatars.com' },
    ],
  },
  experimental: {}
};

export default nextConfig;
