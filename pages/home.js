const Tram = require('tram-one')
const html = Tram.html({
  'line-status': require('../elements/line-status'),
  'sms-signup': require('../elements/sms-signup'),
  'simple-text': require('../elements/simple-text')
})

const colors = {
  'red': '#da291c',
  'orange': '#ed8b00',
  'green': 'green',
  'blue' : '#003da5'
}

const download = (store, actions, params) => {
  if(store.update.Red.length == 0) {
    fetch('/puller/status').then((resp) => resp.json())
    .then((resp) => {
      actions.setData(resp);
    });

  }
};

const camelize = name => name.slice(0,1).toUpperCase().concat(name.slice(1))

module.exports = (store, actions, params) => {
  download(store, actions);

  const lines = (params.line ? [params.line] : ['green', 'orange', 'red'])
    .map(color => html`<line-status line=${camelize(color)} color='${colors[color.toLowerCase()]}' />`)

  return html`
    <div>
      <!--<sms-signup />-->
      <div class="columns">
        ${lines}
      </div>
    </div>
  `
}
