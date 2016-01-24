var path = require('path');
var webpack = require('webpack')

module.exports = {
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      './app/index.jsx' // Your appʼs entry point
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist/'
    },
    devtool: 'inline-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot','babel?cacheDirectory,presets[]=react,presets[]=es2015,presets[]=survivejs-kanban'],
          exclude: /node_modules/
        },
        {
          test: /\.less$/,
          loader: "style!css!less"
        },
        {
          test   : /\.(otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          loader : 'file-loader'
        }
      ]
    }
};
