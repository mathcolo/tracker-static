const Tram = require('tram-one')
const html = Tram.html()
module.exports = (store, actions, params, subroute) => {
  return html`
    <div>
      <section class="hero is-primary is-bold">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              <a href="/">WHERE ARE THE NEW TRAINS IN BOSTON?!</a>
            </h1>
          </div>
        </div>
      </section>

      ${subroute}

      <footer class="footer">
        <div class="content has-text-centered">
          <p></p>
            <a href="https://github.com/mathcolo/tracker-static">Source code</a>
            | <a href="opensource">Open source attributions</a>
            | <a href="privacy">Privacy policy</a>
        </div>
      </footer>
    </div>
  `
}
