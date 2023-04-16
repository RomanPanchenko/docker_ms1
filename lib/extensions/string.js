// eslint-disable-next-line no-extend-native
Object.defineProperty(String.prototype, 'capitalize', {
  value: function capitalizeFunc () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
  writable: false,
  configurable: false
});

Object.defineProperty(String.prototype, 'getHashCode', {
  value: function hash () {
    let hash = 0;
    if (this.length === 0) return hash;
    for (let i = 0; i < this.length; i++) {
      const chr = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }

    return hash;
  },
  enumerable: false,
  writable: false,
  configurable: false
});

Object.defineProperty(String.prototype, 'rightTrim', {
  value: function rightTrimFunc (char) {
    const re = new RegExp(`[${char}]+$`, 'ig');
    return this.replace(re, '');
  },
  enumerable: false,
  writable: false,
  configurable: false
});

Object.defineProperty(String.prototype, 'leftTrim', {
  value: function rightTrimFunc (char) {
    const re = new RegExp(`^[${char}]+`, 'ig');
    return this.replace(re, '');
  },
  enumerable: false,
  writable: false,
  configurable: false
});
