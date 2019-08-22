const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const {
  prodBaseUrl,
  devBaseUrl,
} = require('./src/config/privateConfig');
const {
  componentsDir,
  artefactPugFiles,
} = require('./src/config/publicConfig');

const production = process.env.NODE_ENV === 'production';
const publicPath = production ? prodBaseUrl : devBaseUrl;
const mode = production ? 'production' : 'development';
const devtool = production ? 'source-map' : 'inline-source-map';

const getFilePathArray = (rootDir) => {
  const paths = [];

  const walk = (directory, parent) => {
    const dirPath = path.resolve(__dirname, directory);
    const templateFiles = fs.readdirSync(dirPath);

    templateFiles.forEach((file) => {
      const filepath = path.resolve(__dirname, directory, file);
      const isDirectory = fs.lstatSync(filepath).isDirectory();

      if (isDirectory) {
        const subDirectory = path.join(directory, file);
        if (parent) {
          const parentPath = path.join(parent, file);
          walk(subDirectory, parentPath);
        } else {
          walk(subDirectory, file);
        }
      } else if (parent) {
        const fileWithParent = path.join(parent, file);
        paths.push(fileWithParent);
      } else {
        paths.push(file);
      }
    });
  };

  walk(rootDir);
  return paths;
};

const createHtmlWebpackPlugins = (dir) => {
  const templateFiles = getFilePathArray(dir);
  const filenames = [];

  templateFiles.forEach((file) => {
    if (file.indexOf(artefactPugFiles) > -1) {
      filenames.push(file);
    }
  });

  return filenames.map((filePath) => {
    const filename = filePath.split('.');
    const name = filename[0];
    const identifier = filename[1];
    const extension = filename[2];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${dir}/${name}.${identifier}.${extension}`),
    });
  });
};

const htmlPlugins = createHtmlWebpackPlugins(componentsDir);

module.exports = {
  mode,
  entry: './src/config/index.js',
  output: {
    filename: 'main.min.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath,
  },
  devtool,
  devServer: {
    contentBase: './dist',
    watchContentBase: true,
    port: 3000,
  },
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
        use: [
          {
            loader: production ? MiniCssExtractPlugin.loader : 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/',
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/img/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      TweenLite: path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
      TweenMax: path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
      TimelineLite: path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
      TimelineMax: path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
      ScrollMagic: path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
      'animation.gsap': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
      'debug.addIndicators': path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: process.cwd(),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/siteframes/defaultSiteframe.pug'),
    }),
  ].concat(htmlPlugins),
};
