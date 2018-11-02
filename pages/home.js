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

const download = (store, actions) => {
  if(store.update.Red.length == 0) {
    fetch('/puller/status').then((resp) => resp.json())
    .then((resp) => {
      actions.setData(resp);
      actions.setTime();
    });
    
  }
};


module.exports = (store, actions) => {
  window.setInterval(() => {
    download(store, actions);
  }, 5000);

  return html`
    <div>
      <!--<sms-signup />-->
      <dash-status />
      <div class="columns">
        <line-status line='Green' color='${colors.green}' description='Type 9s' />
        <line-status line='Orange' color='${colors.orange}' description='1400-1500s' />
        <line-status line='Red' color='${colors.red}' description='1900-2100s' />
        <!--<line-status line='Blue' color='${colors.blue}' style='height: 150px;' />-->
      </div>
    </div>
  `
}