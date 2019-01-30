module.exports = {
  init: () => {},
  tick: (store, _, actions) => {
    fetch('/puller/status2').then((resp) => resp.json())
      .then((resp) => {
        actions.setData(resp);
      });
  }
}