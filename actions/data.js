module.exports = {
    init: () => {
      return {
        current: {
          'Red': [],
          'Orange': [],
          'Green': [],
        },
        past: {
          'Red': [],
          'Orange': [],
          'Green': [],
        }
      }
    },
    setData: (store, data, actions) => {
        return data;
    }

  }