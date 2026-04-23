import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Required for Cloudflare Pages / OpenNext adapter
  // Do NOT use 'output: edge' here — that's done per-route
  images: {
    // Allow external image domains used in the app
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'ui-avatars.com' },
    ],
  },
};

export default nextConfig;
