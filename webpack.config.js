var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist/app')
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
    }
  ]
},
plugins: [  
  new HtmlWebpackPlugin({
    template: './src/index.html',
    files: {
      js: [ "bundle.[hash].js"]
    }
  })
]
};