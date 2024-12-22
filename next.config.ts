const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n,
  webpack: (config: any) => {
    config.externals.push("pino-pretty", "lokijs", "encoding", {
      test: /\.(graphql|gql)/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader"
    });
    return config;
  },
};