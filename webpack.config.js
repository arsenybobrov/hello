const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

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

    return new HtmlWebpackPlugin({
      filename: '../defaultSiteframe.html',
      template: path.resolve(__dirname, './src/siteframes/defaultSiteframe.pug'),
    });
  });
}

const htmlPlugins = generateHtmlPlugins('./src/components');

console.log(htmlPlugins);

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
      },
      {
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
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: process.cwd(),
    }),
    // new CopyPlugin([
    //   { from: 'src/assets/img', to: 'assets/img' },
    //   { from: 'src/assets/fonts', to: 'assets/fonts' },
    // ]),
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
  ].concat(htmlPlugins),
};
