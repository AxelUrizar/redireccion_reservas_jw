/** @type {import('next').NextConfig} */

const nextConfig   = {
  experimental: {
    webpackBuildWorker: true
  },
  output: "export",
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

export default nextConfig;
