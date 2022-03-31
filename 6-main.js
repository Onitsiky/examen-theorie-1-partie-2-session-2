const { slice } = require('./1-slice'); //1
const { merge }= require('./2-merge');//1
const { generateUnorderedArray } = require('./4-generate-unordered-array');//1

function sort(array) {
  if (array.length <= 1) { //2
    return array;//1
  }
  const middle = Math.floor(array.length / 2); //4
  const left = slice(array, 0, middle); // 1 + n
  const right = slice(array, middle, array.length); // 1 + n
  return merge(sort(left), sort(right)); // n  
}
/**
 * Complexité de la fonction sort()
 * T(sort) = 2 + 1 + 4 + 1 + n + 1 + n + n
 * T(sort) = 9 + 3*n
 * T(sort) = n 
 * La fonction sort() a une complexité temporelle linéaire
 */

const array = generateUnorderedArray(10); // n
console.log(array);//1
console.log(sort(array)); //n
/**
 * Complexité de l'algorithme
 * T(06) = 1 + 1 + 1 + n + n + 1 + n 
 * T(06) = 4 + 3*n
 * O(06) = n 
 * Cet algorithme a une complexité linéaire 
 */