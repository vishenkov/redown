const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const paths = {
  dist: path.resolve(__dirname, 'dist'),
  client: path.resolve(__dirname, 'client'),
  js: path.resolve(__dirname, 'client/js'),
  clientDist: path.resolve(__dirname, 'public'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.js, 'app.jsx'),
  output: {
    path: paths.clientDist,
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[local]__[hash:base64:5]",
              minimize: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                precss,
                autoprefixer,
              ]
            }
          },
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.client, 'index.html'),
    }),
  ],
};