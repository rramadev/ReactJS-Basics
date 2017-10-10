const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let isProd = process.env.NODE_ENV === 'prod';
let cssDev = ['style-loader', 'css-loader', 'sass-loader']; 
let cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: [
    'css-loader',
    'sass-loader'
  ] 
});
let cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/') ,
    filename: 'app/bundle.[hash].js'       
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-2']
          }
        }
      },
      {
        test: /\.scss$/,
        use: cssConfig     
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //       }
      //     },
      //     {
      //       loader: "extract-loader"
      //     },
      //     {
      //       loader: "html-loader",
      //       options: {
      //         attrs: ["img:src"]
      //       }
      //     },
      //   ] 
      // },
      // {
      //   test: /\.(png|jpg)$/,
      //   use: [ 
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         context: 'src',
      //         outputPath: 'img/',
      //         publicPath: 'img/'
      //       } 
      //     }
      //   ]  
      // }
    ]
  },
  plugins: [  
    new HtmlWebpackPlugin({
      title: 'ReactJS/Redux Basics',
      template: './src/index.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new ExtractTextPlugin({
      filename: 'assets/css/styles.[hash].css'
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.ModuleConcatenationPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin()
  ],
  devServer: {
    open: true,
    // hot: true,
    // port: 9000,
    // stats: 'minimal'
  }
};