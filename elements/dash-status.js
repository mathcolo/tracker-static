const Tram = require('tram-one')
const html = Tram.html()

module.exports = () => {
    const store = window.engine.store;
    return html`<div style='margin-left: 10px;'>Data last updated at ${store.clock}</div>`;
}