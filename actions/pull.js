module.exports = {
  init: () => 'NOT_PULLED',
  startPulling: (store, _, actions) => {
    fetch('/puller/status')
      .then(resp => resp.json())
      .then(resp => actions.setData(resp));
    return 'PULLING'
  },
  setData: () => 'PULLED'
}
