/**
 * Wordpress dependencies
 */
const defaultConfig = require("./node_modules/@wordpress/scripts/config/webpack.config");

/**
 * Plugin dependencies
 */
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/**
 * Environment
 */
const mode = process.env.NODE_ENV || 'development';
const production = mode === 'production';

/**
 * Webpack config
 */
module.exports = {
  ...defaultConfig,
  entry: {
    ...defaultConfig.entry,
    editor: ['./src/editor.scss']
  },
  devtool: "source-map", // any "source-map"-like devtool is possible
  module: {
    ...defaultConfig.module,
    rules: [
      ...defaultConfig.module.rules,
      {
        test: /\.scss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            sourceMap: !production
          }
        },
        {
          loader: "css-loader",
          options: {
            sourceMap: !production
          }
        },
        {
          loader: "sass-loader",
          options: {
            implementation: require('node-sass'),
            sourceMap: !production
          }
        }]
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
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     postcss: [autoprefixer()]
    //   },
    // }),
  ]
};
