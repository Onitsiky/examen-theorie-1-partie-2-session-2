function slice(array, start, end) {
  let slicedArray = []; 
  for (let i = start; i < end; i++) { 
    slicedArray.push(array[i]);
  }
  return slicedArray;
}

module.exports = { slice };
/*
*2th row = 1
*3th row = { i = 1, start = n (because start is a variable), "=" = 1 (for the equality), i = 1, "<" = 1 (for the inferiority), end = n ('cause end is a variable), i++ = 2 (equality and addition))}
         = 1+n+1+1+n+2 = 1+n+1+1+n+1 = n+n = n
*4th row = n (the value of a variable is a variable, i.e array is a variable so array[i] is so)
*6th row = 1
*9th row = 1 (the exportation of the function name is constant)
* O(n) = 1+n+n+1+1 = n (the complexity of this algorithme is linear)
*/
