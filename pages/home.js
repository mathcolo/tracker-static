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

const capitalize = (string) => string.split('').slice(0,1).join('').toUpperCase()+string.split('').slice(1).join('').toLowerCase()

module.exports = (store, actions, params) => {
  // if we haven't started pulling data, do so now
  if (store.pull === 'NOT_PULLED') {
    actions.startPulling()
  }

  const lines = (params.color ? [params.color] : ['green', 'orange', 'red', /* 'blue' */])
    .map(color => html`<line-status line='${capitalize(color)}' color='${colors[color]}' />`)

  return html`
    <div>
      <!--<sms-signup />-->
      <div class="columns">
        ${lines}
      </div>
    </div>
  `
}
