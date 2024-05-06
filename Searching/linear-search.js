// Linear Search in JavaScript - Big Oh - O(n)

const linearSearch = (arr, target) => {

    if(arr.length < 1){
        return -1;
    }

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

const recursiveLinearSearch = (arr, target, index = 0) => {

    if(arr.length < 1){
        return -1;
    }

    if(arr[index] === target) {
        return index;
    }

    return recursiveLinearSearch(arr, target, index + 1);
}

console.log('Iterative Linear Search');

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 90));
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
console.log(linearSearch([], 9));


console.log('Recursive Linear Search');

console.log(recursiveLinearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(recursiveLinearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 90));
console.log(recursiveLinearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
console.log(recursiveLinearSearch([], 9));  