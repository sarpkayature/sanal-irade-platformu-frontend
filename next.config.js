/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    output: 'export',
    distDir: 'dist',
    appDir: true,
  },
};

module.exports = nextConfig;
