const Tram = require('tram-one')
const html = Tram.html({
  'line-status-collection': require('../elements/line-status-collection')
})

module.exports = (attrs) => {

  const link = `/${attrs.line.toLowerCase()}`
  const nav = (event) => {
    event.preventDefault()
    window.history.pushState({}, '', link)
  }

  return html`
    <div class="box" style="width: 100%; min-height: 300px; margin: 20px 10px;${attrs.style || ''}">
      <h4 class="subtitle is-4" style='color: ${attrs.color}' onclick=${nav}>
        <a href=${link}>${attrs.line} Line</a>
      </h4>
      <line-status-collection line='${attrs.line}' mode='std' count=14 model=1800 />
    </div>
  `
}
