// TODO: check if two arrays are equal in terms of elements

const checkEqual = (arr1, arr2) => {

    if (arr1.length !== arr2.length) {
        return false;
    }


    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    
    return true;
}

// TODO: reverse array in place;

const reverseArray = (arr) => {

    for (let i = arr.length - 1, j = 0; i > 0, j < arr.length / 2; i--, j++) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
reverseArray(array);
console.log(array);

// TODO: find the sum off all elesments in an array;

const sumOfArray = (arr) => {
    let sum = 0;

    for(let i = 0; i < arr.length ; i++){
        sum += arr[i]
    }

    return sum
}

// TODO: find the frequency of the elements in the array;

const frequencyOfArrayElems = (arr) => {
    let hashTable = {}

    for(let i = 0; i < arr.length ; i++) {
        if(hashTable[arr[i]]){
            hashTable[arr[i]] ++
        }else {
            hashTable[arr[i]] = 1
        }
    }

    return hashTable
}

const arr = [1,1,2,4,2,5,6,2,3,2,8,9,2,0,2];
console.log(frequencyOfArrayElems(arr));

// TODO: find the first non repeating element in the array;
const firstNonRepeatingElem = (arr) => {
    let hashTable = {}

    for(let i = 0; i < arr.length ; i++) {
        if(hashTable[arr[i]]){
            hashTable[arr[i]] ++
        }else {
            hashTable[arr[i]] = 1
        }
    }

    for(let i = 0; i < arr.length ; i++) {
        if(hashTable[arr[i] != 1]) {
            return i+1
        }
    }

    return -1
}

console.log(firstNonRepeatingElem(arr));

// TODO: find the element with highest frequency;

const highestFreqElem = (arr) => {

    let max = 0;
    let result = 0;
    let hashTable = {}

    for(let i = 0; i < arr.length ; i++) {
        if(hashTable[arr[i]]){
            hashTable[arr[i]] ++
        }else {
            hashTable[arr[i]] = 1
        }

        if(hashTable[arr[i]] > max) {
            max = hashTable[arr[i]]
            result = arr[i]
        }
    }

    return result
}

console.log(highestFreqElem(arr));

// TODO: maximum difference between two element in an array

// TODO: find the kth largest element in an array;

// TODO: missing number in consecutive integers

// TODO: find the element which greater than or equal to all the elements to its right side

// TODO: first repeating element in an array

// TODO: is correct paranthesis;

// TODO: first element that occurs at least K number of times.

// TODO: sorting array of 0s,1s and 2s

// TODO: maximum subarray;

// TODO: Find the equilibrium point;

// TODO: reverse subArrays

// TODO: Given an array having both positive and negative integers. 
//       - The task is to compute the length of the largest subarray with sum 0.

// TODO: Count pairs with given sum

// TODO: array search