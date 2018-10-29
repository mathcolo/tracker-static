const Tram = require('tram-one')
const html = Tram.html({
    'line-item': require('./line-status-item')
})

module.exports = (attrs) => {

    const store = window.engine.store;
    const data = store.trains[attrs.line];

    if(attrs.line == 'Blue') {
        return html`<div>No new trains expected on the Blue Line.</div>`
    }

    const entries = data.length > 0 ?
        data.map(entry => html`<line-item car=${entry.cars[0]} status=${entry.status} stop_name=${entry.stop_name}/>`) :
        html`<div>No new trains on this line, yet.</div>`;
    return html`${entries}`;

}
