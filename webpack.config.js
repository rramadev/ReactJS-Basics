var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: 'app/bundle.[hash].js',
    path: path.resolve(__dirname, 'dist/')    
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
        js: ["bundle.[hash].js"]
      }
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};