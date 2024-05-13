const fifthRecursion = (counter = 1) => {
  if (counter > 5) {
    console.log("Done");
    return;
  }
  console.log(counter);
  return fifthRecursion(counter+1);
};

fifthRecursion();

const fibonaaci = (n) => {
  if (n < 2) return n;
  return fibonaaci(n - 1) + fibonaaci(n - 2);
};

const factorial = (n) => {
  if (n < 1) return 0;
  return n * factorial(n - 1);
};

const factorialIterative = (n) => {
  let result = 1;

  for (let i = 2; i < n; i++) {
    result = result * i;
  }

  return result;
};

fifthRecursion();


function removeDuplicatesRecursive(arr, index = 0) {
    if (index === arr.length) {
        return [];
    }
    const rest = removeDuplicatesRecursive(arr, index + 1);
    if (rest.indexOf(arr[index]) === -1) {
        rest.unshift(arr[index]);
    }
    return rest;
}

// Example usage:
const array = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicatesRecursive(array)); // Output: [1, 2, 3, 4, 5]


// TODO: Find even numbers using recursion

const isEven = (arr, index = 0) => {

    if(index === arr.length) {
        return [];
    }

    if(arr[index] % 2 === 0) {
        return [...isEven(arr, index + 1), arr[index]];
    }else {
        return isEven(arr, index + 1);
    }

}

// TODO: use binary search for the above isEven function

const binarySearch = (arr, target, left = 0, right = arr.length - 1) => {

    if(left > right) {
        return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if(arr[mid] === target) {
        return mid;
    }else if(arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, right);
    }else {
        return binarySearch(arr, target, left, mid - 1);
    }

}


let newArr = isEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(newArr)