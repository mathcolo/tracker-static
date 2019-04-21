import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div style={{ padding: '10px' }}>
        <p>newtrains.today is my small project that's out there to track where the new trains are. That's it (for now). I'm a fan of public transit, and this site could help me (and you) find the new trains in Boston when they're running. More rides = more fun! :-)</p>
        <p>Want to support this site? Thanks, but please instead consider making a donation to the fine folks over at <a className="has-text-link" href="https://transitmatters.org/">TransitMatters</a>.</p>
        <p style={{ marginTop: '30px' }}>This site is powered by the MBTA's <a className="has-text-link" href="https://mbta.com/developers/v3-api">public API</a>, and I'm indebted to my friend <a className="has-text-link" href="http://jrjurman.com/">Jesse Jurman</a> who wrote the <a className="has-text-link" href="http://tram-one.io/">Tram-One JavaScript framework</a> which powers it. I'll never stop learning from that guy.</p>
        <p style={{ marginTop: '30px' }}>--<a className="has-text-link" href="https://prestonmueller.com">Preston Mueller</a></p>
      </div>
    )
  }
}

export default About;
