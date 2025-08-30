// const withPWA = require('next-pwa');

module.exports = {
  images: {
    domains: ['i.ibb.co'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Static export for GitHub Pages
  trailingSlash: true, // Required for GitHub Pages
  reactStrictMode: false,
  swcMinify: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  // Disable server-side features for static export
  experimental: {
    appDir: false,
  },
};
