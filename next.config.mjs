/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode to highlight potential problems
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  // Continue ignoring ESLint warnings during production builds if desired
  eslint: {
    ignoreDuringBuilds: true,
  },

  // TypeScript checking during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Experimental features for better compatibility
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
};

export default nextConfig;
