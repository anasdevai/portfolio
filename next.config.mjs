/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode to highlight potential problems
  reactStrictMode: true,

  // Enable SWC-based minification for faster builds and smaller bundles
  swcMinify: true,

  images: {
    domains: [
      "img.freepik.com",
      "img.icons8.com",
      "source.unsplash.com",
      "cdn.sanity.io"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "/external-flaticons-lineal-color-flat-icons/**",
      },
    ],
  },

  // Continue ignoring ESLint warnings during production builds if desired
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Optional: Useful for building standalone server output, which might help on Netlify or other platforms
  experimental: {
    outputStandalone: true,
  },
};

export default nextConfig;
