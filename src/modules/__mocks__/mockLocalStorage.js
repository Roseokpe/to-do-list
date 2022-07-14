const store = {};
const localStorageMock = {
  getItem: (key) => store[key],
  setItem: (key, value) => {
    store[key] = value;
  },
};

export default localStorageMock;