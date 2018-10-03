const Tram = require('tram-one')
require("babel-polyfill")

window.engine = {}
const app = new Tram({
  defaultRoute: '/',
  webEngine: window.engine
})

const route = Tram.route()

app.addRoute('/', require('./pages/wrapper'), [
  route('/', require('./pages/home')),
  route('/:color', require('./pages/home')),
  route('/privacy', require('./pages/privacy')),
  route('/opensource', require('./pages/opensource')),
])

app.addActions({
  pull: require('./actions/pull'),
  trains: require('./actions/trains')
})

app.start('.main')
