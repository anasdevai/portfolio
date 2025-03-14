/** @type {import('next').NextConfig} */
const nextConfig = {
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
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
