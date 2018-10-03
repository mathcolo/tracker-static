const Tram = require('tram-one')
const html = Tram.html();

module.exports = (attrs) => {

    const css = `
    width: 650px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    background-color: #e0e0e0;
    color: #fffff;
    
    `;
  
  return html`
    <div class="box" style="${css}">
    </div>
    `
}
