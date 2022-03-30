function slice(array, start, end) {
  let slicedArray = [];
  for (let i = start; i < end; i++) {
    slicedArray.push(array[i]);
  }
  return slicedArray;
}

module.exports = { slice };
