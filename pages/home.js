const Tram = require('tram-one')
const html = Tram.html({
  'line-status': require('../elements/line-status'),
  'sms-signup': require('../elements/sms-signup'),
  'simple-text': require('../elements/simple-text'),
  'dash-status': require('../elements/dash-status')
})

const colors = {
  'red': '#da291c',
  'orange': '#ed8b00',
  'green': 'green',
  'blue' : '#003da5'
}

module.exports = (store, actions) => {
  if (store.ticker === null) {
    actions.startTicking(30000);
  }

  return html`
    <div>
      <!--<sms-signup />-->
      <div class="columns">
      <line-status line='Green' color='${colors.green}' description='Type 9s (3900+)' />
      <line-status line='Orange' color='${colors.orange}' description='#14 (01400+)' />
      <line-status line='Red' color='${colors.red}' description='#4 (01900+)' />
      <!--<line-status line='Blue' color='${colors.blue}' style='height: 150px;' />-->
      <!--<dash-status />-->
      </div>
    </div>
  `
}