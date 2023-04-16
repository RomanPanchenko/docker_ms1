// eslint-disable-next-line no-extend-native
Object.defineProperty(Array.prototype, 'first', {
  value: function getFirstArrayElement () {
    if (!this.length) {
      throw new Error('Cannot get array.first() because array is empty');
    }

    return this[0];
  },
  enumerable: false,
  writable: false,
  configurable: false
});

Object.defineProperty(Array.prototype, 'last', {
  value: function getLastArrayElement (rightOffset = 0) {
    if (rightOffset < 0) throw new Error('Cannot get array.last() because rightOffset should be greater or equal to 0');
    const index = rightOffset + 1;
    if (this.length < index) {
      throw new Error('Cannot get array.last() because rightOffset out of the array boundaries');
    }

    return this[this.length - index];
  },
  enumerable: false,
  writable: false,
  configurable: false
});
