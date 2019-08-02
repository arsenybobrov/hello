const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/assets')
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
      }, {
        loader: "css-loader", options: {
          sourceMap: true
        }
      }, {
        loader: "sass-loader", options: {
          sourceMap: true
        }
      }]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};