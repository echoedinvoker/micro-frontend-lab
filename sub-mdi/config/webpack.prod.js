const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const packageJson = require('../package.json');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: 'http://localhost/mdi/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mdi',
      filename: 'remoteEntry.js',
      exposes: {
        './MdiApp': './src/bootstrap'
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
