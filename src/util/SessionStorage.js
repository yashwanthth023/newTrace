export const SessionStorage = {
  setItem: (key, value) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(key, value);
    }
  },
  getItem: (key) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const value = localStorage.getItem(key);
      if (value && value.startsWith("function")) {
        return value;
      }
      return value;
    }
    return null;
  },
  removeItem: (key) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(key);
    }
  },
  clearAll: () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.clear();
    }
  }
};
