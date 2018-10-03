const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs) => {

    return html`<div class="box" style="width: ${attrs.width};">
    ${attrs.text}
    </div>`;
  
}
