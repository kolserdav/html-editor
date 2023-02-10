// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = ({ NODE_ENV, MIN }) => ({
  mode: NODE_ENV,
  target: 'web',
  context: __dirname,
  entry: './src/package/Main.tsx',
  output: {
    path: path.resolve(__dirname, 'umd'),
    filename: `js/uyem.${MIN === 'true' ? 'min.' : ''}js`,
    libraryTarget: 'umd',
    library: 'Uyem',
  },
  optimization: {
    minimize: MIN === 'true',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new webpack.BannerPlugin(fs.readFileSync(path.resolve(__dirname, './LICENSE'), 'utf8')),
    new MiniCssExtractPlugin({
      filename: 'css/styles.css',
    }),
    new Dotenv({
      path: './.env',
      safe: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.compile.json',
            },
          },
        ],
      },
      { test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.(scss|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  externals: [
    {
      react: 'React',
    },
  ],
});
