const { slice } = require('./1-slice'); //1
const { merge }= require('./2-merge'); //1
const { generateUnorderedArray } = require('./4-generate-unordered-array'); //1

function sort(array) {
  if (array.length <= 1) { //n+1
    return array; //n
  }
  const middle = Math.floor(array.length / 2); //1+n+1
  const left = slice(array, 0, middle); // 1+n+n+1 (n for the slice function and n for the variable array)
  const right = slice(array, middle, array.length);  // 1 + n+n+1+n
  return merge(sort(left), sort(right)); // 1
}

const array = generateUnorderedArray(10); // 2
console.log(array); //1
console.log(sort(array)); //1
/*
* O(n) = 1 + 1 + 1 + (n+1) * n + 1+n+1 + 1+n+n+1 + 1+n+n+1+n + 1 + 2 +1 + 1 = 1+1+1+n²+n+1+n+1+1+n+n+1+n+1+1+1+1 = n² = T(n²) (quadratic complexity) 
*/
