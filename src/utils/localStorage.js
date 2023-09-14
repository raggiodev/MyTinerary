const localStorageFn = {
  getText: (key) => localStorage.getItem(key),
  get: (key) => JSON.parse(localStorage.getItem(key)),
  set: (key, value) => JSON.stringify(localStorage.setItem(key, value)),
  clear: () => localStorage.clear(),
  remove: (key) => JSON.stringify(localStorage.removeItem(key)),
};

export default localStorageFn;

// O...
/* const localStorageFn = {
  getText: (key) => localStorage.getItem(key),
  get: (key) => JSON.parse(localStorage.getItem(key)),
  set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  clear: () => localStorage.clear(),
  remove: (key) => localStorage.removeItem(key),
};

export default localStorageFn;
*/