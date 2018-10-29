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

const itemStyle = `
  margin-bottom: 1em;
`

module.exports = (attrs) => {

    const words = `${attrs.car}${nl_status(attrs.status)} ${attrs.stop_name}`;
    return html`<div style=${itemStyle}>${words}</div>`;

}
