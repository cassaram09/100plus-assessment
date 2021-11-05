module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config

    config.plugins.push(
      new webpack.ProvidePlugin({
        React: "react",
        ReactDOM: "react-dom",
        PropTypes: "prop-types",
      })
    );

    config.module.rules.push({
      test: /\.(png|gif|jpg|jpeg|svg)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            emitFile: isServer,
            publicPath: `/_next/static/`,
            outputPath: `${isServer ? "../" : ""}static/`,
            name: "[path][name].[ext]",
          },
        },
      ],
    });

    return config;
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config;
  },
  redirects: () => [],
};
