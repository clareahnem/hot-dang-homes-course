/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL(`http://${process.env.WP_IMAGES_URL}/**`)],
  },
};

module.exports = nextConfig;
