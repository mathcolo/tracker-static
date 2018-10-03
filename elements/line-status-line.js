const Tram = require('tram-one')
const html = Tram.html()

const nl_status = (status) => {
    switch(status) {
        case "IN_TRANSIT_TO":
            return "is on its way to";
        case "INCOMING_AT":
            return "is about to arrive at";
        case "STOPPED_AT":
            return "is at ";
    }
}

const space = '';

module.exports = (attrs) => {

    console.log('RUNNING');

    const store = window.engine.store;
    const actions = window.engine.actions;
    
    if(attrs.line == 'Blue') {
        return html`<div>No new trains expected.</div>`
    }


    const renderEntry = (entry) => {
        const words = `Car ${entry.cars[0]} ${nl_status(entry.status)} ${entry.stop_name}`;
        return html`<div style='padding-bottom: 3px;'>${words}</div>`;
    };
    const nothingNew = html`<div>No new trains on this line.</div>`;

    const data = store.update[attrs.line];
    const entries = data.length > 0 ? data.map(renderEntry) : nothingNew;
    return html`${entries}`;
  
}
