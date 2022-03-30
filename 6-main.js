const { slice } = require('./1-slice');
const { merge }= require('./2-merge');
const { generateUnorderedArray } = require('./4-generate-unordered-array');

function sort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = slice(array, 0, middle);
  const right = slice(array, middle, array.length);
  return merge(sort(left), sort(right));
}

const array = generateUnorderedArray(10);
console.log(array);
console.log(sort(array));