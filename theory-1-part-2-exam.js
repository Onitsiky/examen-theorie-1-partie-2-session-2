function slice(array, start, end) {
    let slicedArray = [];
    for (let i = start; i < end; i++) {
        slicedArray.push(array[i]);
    }
    return slicedArray;
}

function merge(array1, array2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            mergedArray.push(array1[i]);
            i++;
        } else {
            mergedArray.push(array2[j]);
            j++;
        }
    }
    while (i < array1.length) {
        mergedArray.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        mergedArray.push(array2[j]);
        j++;
    }
    return mergedArray;
}


function sort(array) {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = slice(array, 0, middle);
    const right = slice(array, middle, array.length);
    return merge(sort(left), sort(right));
}

function arrayContain(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return true;
        }
    }
    return false;
}

function generateAndUnordereredArray(size) {
    let array = [];
    for (let i = 0; i < size; i++) {
        let number = Math.floor(Math.random() * 100);
        while (arrayContain(array, number)) {
            number = Math.floor(Math.random() * 100);
        }
        array.push(number);
    }
    return array;
}

const array = generateAndUnordereredArray(10);
console.log(array);
console.log(sort(array));