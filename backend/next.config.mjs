/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'unsplash.it',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname : 'www.svgrepo.com',
          pathname: '/**',
        }
      ],
    },
    crossOrigin: 'anonymous',
    

  };
  
  export default nextConfig;
  