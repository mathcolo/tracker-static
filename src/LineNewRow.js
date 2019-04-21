import React, { Component } from 'react';
import { nl_status, nl_direction } from './nl_functions';

class LineNewRow extends Component {
  render() {
    const cars = this.props.entry.cars.join('-');
    const words = ` ${nl_direction(this.props.entry.direction, this.props.name)} ${nl_status(this.props.entry.status)} ${this.props.entry.stop_name}`;
    return (<div style={{ paddingBottom: '3px' }}><span className={`tag ${this.props.name}`}>{cars}</span>{words}</div>)
  }
}

export default LineNewRow;
