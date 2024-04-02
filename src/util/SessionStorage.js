export const SessionStorage = {
  setItem: (key, value) => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem(key, value);
    }
  },
  getItem: (key) => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const value = sessionStorage.getItem(key);
      if (value && value.startsWith("function")) {
        return value;
      }
      return value;
    }
    return null;
  },
  removeItem: (key) => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.removeItem(key);
    }
  },
  clearAll: () => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.clear();
    }
  }
};
