import React, { Component } from 'react';
import LineNewRow from './LineNewRow';
import { nl_distance } from './nl_functions';

class Line extends Component {
  boxStyle() {
    return {
      width: '100%',
      minHeight: '300px',
      margin: '15px 5px 15px 5px',
    }
  }

  render() {
    const current = this.props.trips.current[this.props.name];
    const past = this.props.trips.past[this.props.name];
    const trainsNew = current.filter((train) => train.cars_new_flag);
    const trainsOld = current.filter((train) => !train.cars_new_flag);

    return (
      <div className="box" style={this.boxStyle()}>
        <h4 className="subtitle is-4" style={{ color: this.props.color }}>{this.props.title}</h4>

        {(!trainsNew.length) &&
          <span><span role="img" aria-label="None">🚫</span> No new trains on this line right now.</span>
        }

        {trainsNew.map(i =>
          <LineNewRow name={this.props.name} entry={i} />
        )}

        <div style={{ marginTop: '30px' }}>
          {(past.length > 0 && !trainsNew.length) &&
            <span>A new train was last seen on this line {nl_distance(past[0].seen_end)}. </span>
          }

          <span style={{ marginTop: '30px' }}>There are currently {trainsOld.length} trips running older cars on the line.</span>
        </div>
      </div>
    );
  }
}

export default Line;
