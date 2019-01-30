const moment = require('moment');
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

const nl_direction = (direction_id, line_name) => {

    if(line_name === 'Green') {
        return direction_id? 'eastbound' : 'westbound';
    }
    else {
        return direction_id? 'northbound' : 'southbound';
    }
}

module.exports = (attrs) => {

    const store = window.engine.store;
    const current = store.data['current'][attrs.line];
    const trainsNew = current.filter((train) => train.cars_new_flag);
    const trainsOld = current.filter((train) => !train.cars_new_flag);

    const past = store.data['past'][attrs.line];

    if(attrs.line == 'Blue') {
        return html`<div>No new trains expected on the Blue Line.</div>`
    }

    const template_nothingNew = html`<div>🚫 No new trains on this line right now.</div>`;
    const template_trainsNewEntry = (entry) => {
        const words = ` ${nl_direction(entry.direction, attrs.line)} ${nl_status(entry.status)} ${entry.stop_name}`;
        const cars = entry.cars.join('-');
        return html`<div style='padding-bottom: 3px;'><span class="tag ${attrs.line}">${cars}</span>${words}</div>`;
    };
    const template_newTrains = trainsNew.length? trainsNew.map(template_trainsNewEntry) : template_nothingNew;
    
    const template_pastNew = (past.length && !trainsNew.length)? `A new train was last seen on this line ${moment(past[0].seen_end).fromNow()}.` : '';
    const template_oldTrains = html`
    <div style='margin-top: 30px;'>
    ${template_pastNew} There are currently ${trainsOld.length} trips running older cars on the line.
    </div>
    `;

    return html`<div>${template_newTrains}${template_oldTrains}</div>`;  
}
