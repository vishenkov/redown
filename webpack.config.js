const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const paths = {
  src: path.join(__dirname, 'client'),
  js: path.join(__dirname, 'client', 'js'),
  dist: path.join(__dirname, 'build'),
};

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    './client/js/index.jsx',
  ],
  devtool: 'inline-source-map',
  output: {
    path: paths.dist,
    filename: 'bundle.js',
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]__[hash:base64:5]',
              minimize: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                precss,
                autoprefixer,
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.src, 'index.html'),
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
