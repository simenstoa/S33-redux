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
        loaders: ['react-hot','babel?cacheDirectory,presets[]=react,presets[]=es2015,presets[]=survivejs-kanban'],
        exclude: /node_modules/
      },
      { test: /\.less?$/,
        loader: 'style!css!less',
        include: path.join(__dirname, 'css')
      },
      {
        test   : /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'file-loader'
      }
    ]
  }
}
