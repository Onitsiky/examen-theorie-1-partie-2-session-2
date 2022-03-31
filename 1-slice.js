function slice(array, start, end) {
  let slicedArray = []; //1
  for (let i = start; i < end; i++) { //i*6
    slicedArray.push(array[i]); //2
  }
  return slicedArray; //2
}

module.exports = { slice };

/**
 * T(01) = 1 + 6*i(2) + 2
 * T(01) = 3 + 6*i(2)
 * T(01) = 1 + 1*n(1)
 * O(01) = n
 * Cet algorithme a une complexité temporelle linéaire
 */