var webpack = require('webpack')
var path = require('path')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/main.js'
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: "/dist/",
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    fallback: [path.join(__dirname, './node_modules')],
    alias: {
      'src': path.resolve(__dirname, './src'),
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, './node_modules')]
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: [
        'react-hot',
        'babel-loader'
      ],
      include: projectRoot,
      exclude: /node_modules/
    }]
  },
  devServer: {
    host: "0.0.0.0",
    historyApiFallback: true,
    noInfo: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  devtool: '#eval-source-map'
}
