const webpack = require('webpack');
const { parsed: myEnv } = require('dotenv').config({
  path: './.env',
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['rb.gy'],
  },
  // webpack(config) {
  //   config.plugins.push(new webpack.EnvironmentPlugin(myEnv));
  //   return config;
  // },
};

module.exports = nextConfig;
