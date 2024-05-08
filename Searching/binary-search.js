const binarySearch = (arr, target) => {
  // left and right pointers
  let left = 0;
  let right = arr.length - 1;

  // while the left index is less than or equal to the right index
  while (left <= right) {
    // get the middle index
    let mid = Math.floor((left + right) / 2);

    // if the middle index is equal to the target
    if (arr[mid] === target) {
      return mid;
    } else if (target < arr[mid]) {
      // if the middle index value is greater than the target
      // set the right index to the middle index - 1
      right = mid - 1;
    } else {
      // if the middle index value is less than the target
      // set the left index to the middle index + 1
      left = mid + 1;
    }
  }

  return -1;
};

const recursiveBinarySearch = (
  arr,
  target,
  left = 0,
  right = arr.length - 1
) => {
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return recursiveBinarySearch(arr, target, mid + 1, right);
  } else {
    return recursiveBinarySearch(arr, target, left, mid - 1);
  }
};

console.log("Binary Search");

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 90));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));

console.log("Recursive Binary Search");

console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(recursiveBinarySearch([1, 3, 4, 5, 6, 7, 8, 9, 10], 90));
console.log(recursiveBinarySearch([1, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));

const replaceWithZero = (arr, t) => {
  let targetIndex = binarySearch(arr, t);
  arr[targetIndex] = 0;
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

replaceWithZero(array, 5);

console.log(array);
