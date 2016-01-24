var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/index.jsx'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory,presets[]=react,presets[]=es2015,presets[]=survivejs-kanban'],
        exclude: /node_modules/
      },
      { test: /\.less?$/,
        loader: 'style!css!less'
      },
      {
        test   : /\.otf$/,
        loader : 'url-loader'
      }
    ]
  }
}
