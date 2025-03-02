/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['img.freepik.com', 'img.icons8.com', 'source.unsplash.com' , 'cdn.sanity.io'],
        
      },
     eslint:{
      ignoreDuringBuilds: true,
      },

};

export default nextConfig;
