/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // images: {
  //   // domains: ['plus.unsplash.com'],
  //   domains: ["images.unsplash.com", "plus.unsplash.com"],
  // },
  // Or 

   images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com',
      //   pathname: '/**',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'res.cloudinary.com',
      //   pathname: '/**',
      // },

      // Or 
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '**',
        pathname: '/**',
      },
    ]
  }
};


export default nextConfig;
