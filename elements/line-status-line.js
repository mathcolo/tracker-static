const Tram = require('tram-one')
const html = Tram.html()

const nl_status = (status) => {
    switch(status) {
        case "IN_TRANSIT_TO":
            return " headed to";
        case "INCOMING_AT":
            return " arriving at";
        case "STOPPED_AT":
            return " at ";
    }
}

const space = '';

module.exports = (attrs) => {

    const store = window.engine.store;
    // const actions = window.engine.actions;
    
    if(attrs.line == 'Blue') {
        return html`<div>No new trains expected on the Blue Line.</div>`
    }


    const renderEntry = (entry) => {
        const words = `${entry.cars[0]}${nl_status(entry.status)} ${entry.stop_name}`;
        return html`<div style='padding-bottom: 3px;'>${words}</div>`;
    };
    const nothingNew = html`<div>No new trains on this line, yet.</div>`;

    const data = store.update[attrs.line];
    const entries = data.length > 0 ? data.map(renderEntry) : nothingNew;
    return html`${entries}`;
  
}
