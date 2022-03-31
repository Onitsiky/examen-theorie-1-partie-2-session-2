const { arrayContain } = require('./3-array-contain'); //1

function generateUnorderedArray(size) {
  let array = []; //1
  for (let i = 0; i < size; i++) { // 1+1+n+2 
    let number = Math.floor(Math.random() * 100); // 5
    while (arrayContain(array, number)) { //1
      number = Math.floor(Math.random() * 100); //5
    }
    array.push(number); //1
  }
  return array; //1
}

module.exports = { generateUnorderedArray }; //1
/*
* O(n) = 1 + 1 + 1+1+n+2 + 5 + 1 + 5 + 1 + 1 + 1 = n = T(n) (linear)
*/
