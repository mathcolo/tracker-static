const path = require('path')

module.exports = {
  entry: './main.js',
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  externals: {
    domino: 'domino'
  },
  output: {
    filename: 'bundle.js',
    publicPath: './public',
    path: path.resolve(__dirname, 'dist')
  }
}

if (process.env.WEBPACK_SERVE) {
  module.exports.serve = require('tram-dev-server-config')
  module.exports.serve.proxy = {
    '/puller': {
      target: 'http://localhost:5000',
      secure: false
    }
  };
}
