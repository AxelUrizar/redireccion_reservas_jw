/** @type {import('next').NextConfig} */

const nextConfig   = {
  future: { webpack5: true },
  output: "export",
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

export default nextConfig;
