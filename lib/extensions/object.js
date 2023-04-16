Object.defineProperty(Object.prototype, 'getHashCode', {
  value: function hash () {
    try {
      const s = JSON.stringify(this);
      return s.getHashCode();
    } catch (e) {
      return 0;
    }
  },
  enumerable: false,
  writable: false,
  configurable: false
});
