const Tram = require('tram-one')
const html = Tram.html()

const nl_status = (status) => {
    switch(status) {
        case "IN_TRANSIT_TO":
            return " headed to";
        case "INCOMING_AT":
            return " at ";
        case "STOPPED_AT":
            return " at ";
    }
}

const nl_direction = (direction_id) => {
    return direction_id? 'northbound' : 'southbound';
}

module.exports = (attrs) => {

    const store = window.engine.store;
    const trains = store.data[attrs.line];

    if(attrs.line == 'Blue') {
        return html`<div>No new trains expected on the Blue Line.</div>`
    }

    const nothingNew = html`<div>No new trains on this line right now.</div>`;

    const trainsNew = trains.filter((train) => train.cars_new_flag);
    const trainsOld = trains.filter((train) => !train.cars_new_flag);

    const renderEntry = (entry) => {
            const words = ` ${nl_direction(entry.direction)} ${nl_status(entry.status)} ${entry.stop_name}`; // ${nl_direction(entry.direction)}
            const cars = entry.cars.join('-')
            return html`<div style='padding-bottom: 3px;'><span class="tag ${attrs.line}">${cars}</span>${words}</div>`;
    };

    const entries = trainsNew.length? trainsNew.map(renderEntry) : nothingNew;

    const otherStats = html`<div style='margin-top: 20px;'>There are currently ${trainsOld.length} trips running older cars on the line.</div>`;
    return html`<div>${entries}${otherStats}</div>`;
  
}
