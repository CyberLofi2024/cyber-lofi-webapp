/** @type {import('next').NextConfig} */

const sentryWebpackPluginOptions = {
  debug: false,

  silent: true,
};

const nextConfig = {
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
};

module.exports = nextConfig;
