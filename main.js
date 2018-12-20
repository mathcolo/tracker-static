const Tram = require('tram-one')
require("babel-polyfill")

window.engine = {}
const app = new Tram({
  webEngine: window.engine
})

app.addRoute('/', require('./pages/home'))
app.addRoute('/404', require('./pages/404'))

app.addRoute('/about', require('./pages/about'))
app.addRoute('/privacy', require('./pages/privacy'))
app.addRoute('/opensource', require('./pages/opensource'))
app.addActions({ update: require('./actions/update'), 
                 clock: require('./actions/clock'),
                 ticker: require('./actions/ticker'),
                 data: require('./actions/data')
               })

app.start('.main')
