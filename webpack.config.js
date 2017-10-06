var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ] 
        })       
      }
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
    new ExtractTextPlugin("assets/css/styles.[hash].css"),
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  devServer: {
    open: true
    // port: 9000,
    // stats: 'minimal'
  }
};