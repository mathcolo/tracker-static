module.exports = {
    init: () => {
      return {
        'Red': [],
        'Orange': [],
        'Green': [],
        'Blue': []
      }
    },
    setData: (store, data, actions) => {
        console.log('Setting data');
        return data;
    }

  }