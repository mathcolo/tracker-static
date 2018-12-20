module.exports = {
    init: () => null,
    startTicking: (ticker, delay, actions) => {
      actions.tick();
      return setInterval(() => {
        actions.tick();
      }, delay)
    }
  }
  