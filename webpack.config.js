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
  entry: {
    app: path.join(paths.js, 'app.jsx'),
    vendor: ['react'],
  },
  output: {
    path: paths.dist,
    filename: '[name].bundle.[chunkhash].js',
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
        loader: ExtractTextPlugin.extract(
          [{
            loader: 'css-loader',
            options: {
              modules: true,
              minimize: true
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
        ]),
      }
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
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
  ],
};