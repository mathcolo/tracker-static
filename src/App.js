import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import About from './About';
import OpenSource from './OpenSource';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/opensource" component={OpenSource} />
        </div>
      </Router>
    )
  }
}

export default App;
