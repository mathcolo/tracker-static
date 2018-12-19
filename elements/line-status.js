const Tram = require('tram-one')
const html = Tram.html({
  'line-status-line': require('../elements/line-status-line')
})

module.exports = (attrs) => {  
  return html`
    <div class="box" style="width: 100%; min-height: 300px; margin: 20px;${attrs.style || ''}">
    <h4 class="subtitle is-4" style='color: ${attrs.color}'>${attrs.line} Line - ${attrs.description}</h4>

      <line-status-line line='${attrs.line}' mode='std' count=14 model=1800 />
      
    </div>`
}
