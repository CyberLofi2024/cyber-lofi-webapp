/** @type {import('next').NextConfig} */

const sentryWebpackPluginOptions = {
  debug: false,

  silent: true,
};

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/**",
      },
    ],
  },
});

module.exports = nextConfig;
