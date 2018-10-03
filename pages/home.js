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

const download = (store, actions) => {
  if(store.update.Red.length == 0) {
    fetch('/puller/status').then((resp) => resp.json())
    .then((resp) => {
      actions.setData(resp);
    });
    
  }
};

module.exports = (store, actions) => {
  download(store, actions);

  return html`
    <div>
      <!--<sms-signup />-->
      <div class="columns">
        <line-status line='Green' color='${colors.green}' />
        <line-status line='Orange' color='${colors.orange}' />
        <line-status line='Red' color='${colors.red}' />
        <!--<line-status line='Blue' color='${colors.blue}' style='height: 150px;' />-->
      </div>
    </div>
  `
}