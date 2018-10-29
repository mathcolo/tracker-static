const Tram = require('tram-one')
const html = Tram.html({
  'line-status-line': require('../elements/line-status-line')
})

module.exports = (attrs) => {
  const nav = () => {
    window.history.pushState({}, '', `/${attrs.line}`)
  }

  return html`
    <div class="box" style="width: 100%; min-height: 300px; margin: 20px;${attrs.style || ''}">
      <h4 class="subtitle is-4" style='color: ${attrs.color}'>
        <a href="/${attrs.line}" onclick=${nav}> ${attrs.line} Line</a>
      </h4>

      <line-status-line line='${attrs.line}' mode='std' count=14 model=1800 />

    </div>`
}
