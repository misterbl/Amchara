const webpack = require('webpack');
const path    = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const APP_DIR   = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'build');
const env = process.env.ENVIRONMENT;

export default {
  entry: {
    bundle: `${APP_DIR}/index.js`,
  },
  output: {
    path: BUILD_DIR,
    filename: env !== 'local' ? '[name].[hash].js' : '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: ['absolute/path/a', 'absolute/path/b'],
          },
        }],
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: ['absolute/path/a', 'absolute/path/b'],
          },
        }],
      },
      {
        test: /\.(otf|eot|ttf|woff|woff2)$/,
        include: `${APP_DIR}/images`,
        loader: 'file-loader?name=public/assets/fonts/[name].[ext]',
      },
      {
        test: /\.(svg|jpe?g|png)$/,
        include: `${APP_DIR}/assets`,
        loader: 'file-loader?name=public/assets/[name].[hash].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      excludeChunks: [
      ],
    }),
    new ManifestPlugin({
      fileName: `${BUILD_DIR}/public/hash-manifest.json`
    })
  ],
};
