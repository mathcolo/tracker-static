const Tram = require('tram-one')
const html = Tram.html()

module.exports = () => {
    const store = window.engine.store;
    return html`<div>Data last updated at ${store.clock}</div>`;
}