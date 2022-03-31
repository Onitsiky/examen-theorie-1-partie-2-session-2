function arrayContain(array, number) {
  for (let i = 0; i < array.length; i++) { // 5 * i
    if (array[i] === number) { //3
      return true; //1
    }
  }
  return false;//1
}

module.exports = { arrayContain };

/**
 * T(03) = 5 * i(3 + 1) + 1
 * T(03) = 5 * i(4) + 1
 * O(03) = n
 * Cet algorithme a une complexité temporelle linéaire 
 */
