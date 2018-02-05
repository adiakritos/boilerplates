const webpack = require('webpack');
const path = require('path');

const DIST_PATH = path.resolve(__dirname, 'dist');
const SRC_PATH = path.resolve(__dirname, 'src');

module.exports = {
  entry: SRC_PATH + '/index.jsx',
  output: {
    path: DIST_PATH,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: DIST_PATH
  },
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        include : SRC_PATH,
        loader : 'babel-loader'
      }
    ]
  }
};
