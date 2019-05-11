/**
 * Wordpress dependencies
 */
const defaultConfig = require('@wordpress/scripts/config/webpack.config');

/**
 * Plugin dependencies
 */
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * Environment
 */
const production = process.env.NODE_ENV === 'production';
const mode = production ? 'production' : 'development';

/**
 * Webpack config
 */
module.exports = {
  ...defaultConfig,
  mode,
  entry: {
    ...defaultConfig.entry,
    editor: ['./src/editor.scss'],
    client: ['./src/client.scss'],
  },
  devtool: production ? false : 'source-map', // any 'source-map'-like devtool is possible
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: !production,
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('node-sass'),
              sourceMap: !production,
            }
          }
        ],
      }
    ],
  },
  output: {
    ...defaultConfig.output,
    path: __dirname + '/build/'
  },
  plugins: [
    ...defaultConfig.plugins,
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
  ],
};
