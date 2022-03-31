const { arrayContain } = require('./3-array-contain'); //1

function generateUnorderedArray(size) {
  let array = []; //1
  for (let i = 0; i < size; i++) { //5 * i
    let number = Math.floor(Math.random() * 100); //4
    while (arrayContain(array, number)) { //n
      number = Math.floor(Math.random() * 100); //4 
    }
    array.push(number); //2
  }
  return array; //1
}

module.exports = { generateUnorderedArray };
/**
 * T(04) = 1 + 1 + 5 * i(4) + n(4) + 2 + 1
 * T(04) = 1 + 1 * n(1) + n(1)
 * T(04) = 1 + 1 * n(1)
 * O(04) = n
 * Cet algorithme a une complexité temporelle linéaire
 */