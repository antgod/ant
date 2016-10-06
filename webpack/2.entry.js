var webpack = require('webpack');
var glob = require('glob');
var fs = require('fs');
var path = require('path');

const entries = globPath => {
  var files = glob.sync(globPath);
  var entries = {}, entry, dirname, basename;

  for (var i = 0; i < files.length; i++) {
    entry = files[i];
    dirname = path.dirname(entry);
    basename = path.basename(entry, '.js');
    entries[path.join(dirname, basename)] = './' + entry;
  }

  return entries;
}

module.exports = {
  entry: entries('src/**/*.js'),
  output: {
    path: './out',
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/}
    ]
  },
  resolve:{
    extensions:['','.js','.json']
  }
};