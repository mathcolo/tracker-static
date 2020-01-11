import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div style={{ padding: '10px' }}>
        <p>newtrains.today tracks new light rail and subway vehicles coming to Boston's Green, Orange, and Red Lines. Public transportation is important to me, and this site helps us find those new vehicles when they're running.</p>
        <p>Want to support this site? Thanks, but please instead consider making a donation to the fine folks over at <a className="has-text-link" href="https://transitmatters.org/">TransitMatters</a>.</p>
        <p style={{ marginTop: '30px' }}>This site is powered by the MBTA's <a className="has-text-link" href="https://mbta.com/developers/v3-api">public API</a>, and I'm indebted to my friend <a className="has-text-link" href="http://jrjurman.com/">Jesse Jurman</a> who wrote the <a className="has-text-link" href="http://tram-one.io/">Tram-One JavaScript framework</a> which powered the original version (these days it's React). I'll never stop learning from that guy.</p>
        <p style={{ marginTop: '30px' }}>--<a className="has-text-link" href="https://twitter.com/mathcolo">Preston Mueller</a></p>
      </div>
    )
  }
}

export default About;
