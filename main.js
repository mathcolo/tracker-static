const Tram = require('tram-one')

const app = new Tram()

app.addRoute('/', require('./pages/home'))
app.addRoute('/404', require('./pages/404'))

app.addRoute('/privacy', require('./pages/privacy'))
app.addRoute('/opensource', require('./pages/opensource'))
app.addActions({ update: require('./actions/update')})

window.engine = {
    store: app.engine.store,
    actions: app.engine.actions
}
app.addListener((store, actions) => {
    // update the window store and actions
    window.engine = {
      store, actions
    }
  })

app.start('.main')
