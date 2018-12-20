module.exports = {
  init: () => {},
  tick: (store, _, actions) => {
    fetch('/puller/status').then((resp) => resp.json())
      .then((resp) => {
        actions.setData(resp);
      });
  }
}