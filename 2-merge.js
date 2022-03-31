function merge(array1, array2) {
  let mergedArray = []; //1
  let i = 0; //1
  let j = 0; //1
  while (i < array1.length && j < array2.length) { //{"i < " = 1, array1.length= n ('cause array1 is a variable), "&& j <" = 2, array2.length=n ('cause array2 is a variable) = 1+n+2+n 
    if (array1[i] < array2[j]) { // n + 1 + n
      mergedArray.push(array1[i]); // n
      i++; //2
    } else {
      mergedArray.push(array2[j]); //n
      j++; //2
    }
  }
  while (i < array1.length) { // 1+n
    mergedArray.push(array1[i]); //n
    i++; //2
  }
  while (j < array2.length) { //1+n
    mergedArray.push(array2[j]); //n
    j++; //2
  }
  return mergedArray; //1
}

module.exports = { merge }; //1
/*
*O(n) = 1 + 1 + 1 + (1+n+2+n) * (n+1+n + n + 2 + n + 2) + (1+n) * (n+2) + (1+n) * (n+2) + 1 + 1 = n² = T (n²)
*/
