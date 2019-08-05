const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map((item) => {
    const itemFiles = fs.readdirSync(path.resolve(__dirname, `${templateDir}/${item}`));
    const filename = itemFiles.find((file) => file.match('component.pug'));

    if (filename) {
      const parts = filename.split('.');
      const name = parts[0];
      const identifier = parts[1];
      const extension = parts[2];
      return new HtmlWebpackPlugin({
        filename: `../${name}.html`,
        template: path.resolve(__dirname, `${templateDir}/${item}/${name}.${identifier}.${extension}`),
      });
    }

    return false;
  });
}

const htmlPlugins = generateHtmlPlugins('./src/components');

module.exports = {
  mode: 'production',
  entry: './src/config/index.js',
  output: {
    filename: 'main.min.js',
    path: path.resolve(__dirname, 'dist/assets'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      }, {
        test: /\.(sa|sc|c)ss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
          },
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        }],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: process.cwd(),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
  ].concat(htmlPlugins),
};
