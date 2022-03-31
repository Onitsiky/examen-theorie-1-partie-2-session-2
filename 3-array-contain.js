function arrayContain(array, number) {
  for (let i = 0; i < array.length; i++) { // 2+n+2
    if (array[i] === number) { // n+1+n
      return true; //1
    }
  }
  return false; //1
}

module.exports = { arrayContain }; //1
/*
*O(n) = 2+n+2+n+1+n+1+1+1 = 1+n+1+n+1+n+1+1+1 = n (this complexity is linear)
*/

