const Tram = require('tram-one')
const html = Tram.html()
module.exports = (store, actions) => {
  return html`<div style='padding: 10px;'>
  
    <p>newtrains.today is my small project that's out there to track where the new trains are. That's it (for now). I'm a fan of public transit, and this site could help me (and you) find the new trains in Boston when they're running. More rides = more fun! :-)</p>
    <p>Want to support this site? Thanks, but please instead consider making a donation to the fine folks over at <a class="has-text-link" href="https://transitmatters.org/">TransitMatters</a>.</p>
    <p style="margin-top: 30px;">This site is powered by the MBTA's <a class="has-text-link" href="https://mbta.com/developers/v3-api">public API</a>, and I'm indebted to my friend <a class="has-text-link" href="http://jrjurman.com/">Jesse Jurman</a> who wrote the <a class="has-text-link" href="http://tram-one.io/">Tram-One JavaScript framework</a> which powers it. I'll never stop learning from that guy.</p>

    <p style="margin-top: 30px;">--<a class="has-text-link" href="https://prestonmueller.com">Preston Mueller</p>
  </div>
  `
}
