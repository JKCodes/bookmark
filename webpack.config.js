var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'public/dist/bundle.js',
    sourceMapFilename: 'public/dist/bundle.map'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}