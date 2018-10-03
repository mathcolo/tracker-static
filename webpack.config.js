const path = require('path')
const moduleConfig = require('./webpack-module.config')
module.exports = {
  entry: './main.js',
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    hot: true,
    inline: true,
    proxy: {
      '/puller/status': {
        target: 'https://prestonmueller.com/',
        secure: true,
        changeOrigin: true
      }
    }
  },
  mode: process.env.NODE_ENV,
  module: moduleConfig(process.env.NODE_ENV),
  externals: {
    domino: 'domino'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
