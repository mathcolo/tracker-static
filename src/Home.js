import React, { Component } from 'react';
import Line from './Line';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      data: {
        current: {
          Red: [],
          Orange: [],
          Green: []
        },
        past: {
          Red: [],
          Orange: [],
          Green: []
        }
      }
    };
  }

  async download() {
    const resp = await fetch('/puller/status2');
    const json = await resp.json();   

    this.setState({
      data: json
    });
  }

  componentDidMount() {
    this.download();
    setInterval(this.download.bind(this), 30000);
  }

  render() {
    return (<div className="columns">
      <Line
        name="Green"
        title="Green Line - Type 9s (3900+)"
        color="green"
        trips={this.state.data}
      />
      <Line
        name="Orange"
        title="Orange Line - #14 (01400+)"
        color="#ed8b00"
        trips={this.state.data}
      />
      <Line
        name="Red"
        title="Red Line - #4 (01900+)"
        color="#da291c"
        trips={this.state.data}
      />
    </div>);
  }
}

export default App;
