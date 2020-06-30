module.exports = {
  forEach(arr, fn) {
    for (let idx in arr) {
      fn(arr[idx], idx);
    }
  }
};
