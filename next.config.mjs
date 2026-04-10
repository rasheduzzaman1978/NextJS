/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // domains: ['plus.unsplash.com'],
    domains: ["images.unsplash.com", "plus.unsplash.com"],
  },
};

export default nextConfig;
