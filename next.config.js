/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/rogueapps' : '',
  output: 'export',  // Enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
