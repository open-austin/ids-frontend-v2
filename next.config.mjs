/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',  // This allows all domains - can be restricted to specific domains if needed 
      }
    ],
    // Enable image optimization
    unoptimized: false,
    // Configure image domains if needed
    domains: [],
  },
}

export default nextConfig

module.exports = {
    images: {
      localPatterns: [
        {
          pathname: '/assets/images/**',
          search: '',
        },
      ],
    },
  };