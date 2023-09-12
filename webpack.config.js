module.exports = {
  reactStrictMode: true, // was there by default
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.js$|jsx|mp4|gif/,
      loader: "raw-loader",
    });

    // Important: return the modified config
    return config;
  },
};
