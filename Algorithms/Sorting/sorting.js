/**
 * Sorts an array in ascending order using the bubble sort algorithm.
 *
 * @param {Array} arr - The array to be sorted.
 * @return {undefined} This function does not return a value.
 * 
 * Big Oh - O(n^2) - worst case and average case
 * 
 * Best Case = O(n) - when array is already sorted
 * Worst Case = O(n^2) - when array is reverse sorted
 * Average Case = O(n^2) - when array is partially sorted
 * 
 */
const bubbleSort = (array) => {
  let swapped;
  console.log(`Initial Array: ${array}`);
  do {
    for (let i = 0; i < array.length - 1; i++) {
      swapped = false;
      console.log('Before swap');
      console.log(i,swapped, array)
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
      console.log('After swap');
      console.log(i,swapped, array)
    }
    console.log( '\n' + swapped, array + '\n')
  } while (swapped);
};

let unsortedArray = [5, 3, 7, 1, 9, 8, 2, 4, 6];

bubbleSort(unsortedArray);

console.log(unsortedArray);

/**
 * Recursive Bubble Sort
 * 
 * @param {Array} arr - The array to be sorted. 
 */

const recursiveBubbleSort = (arr) => {}


/**
 * Sorts an array in ascending order using the insertion sort algorithm.
 *
 * @param {Array} arr - The array to be sorted.
 * @return {undefined} This function does not return a value.
 */
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i]
    
    console.log(`numberToInsert: ${numberToInsert}\n i: ${i}\n arr: ${arr}`);
    
    let j = i -1 
    
    while(j>=0 && arr[j] > numberToInsert){
      
      arr[j+1] = arr[j]
      j -= 1
      console.log(`\nnumberToInsert: ${numberToInsert}\n j: ${j}\n arr: ${arr}\n`);
    }
    
    arr[j+1] = numberToInsert
  }
}

/**
 * Recursive Insertion Sort
 * 
 * @param {Array} arr - The array to be sorted. 
 */

const recursiveInsertionSort = (arr) => {}

/**
 * Sorts an array in descending order using the insertion sort algorithm.
 *
 * @param {Array} array - The array to be sorted.
 * @return {undefined} This function does not return a value.
 */
const insertionSortDescending = (array) => {
  for (let i = 1; i < array.length; i++) {
    const elementToInsert = array[i]
    let j = i - 1

    while (j >= 0 && array[j] > elementToInsert) {
      array[j + 1] = array[j]
      j -= 1
    }
    array[j + 1] = elementToInsert
  }
}

// TODO: Selection Sort needs to be implemented 


/**
 * Sorts an array in ascending order using the selection sort algorithm.
 *
 * @param {Array} arr - The array to be sorted.
 * @return {undefined} This function does not return a value.
 * 
 * Big Oh - O(n^2)
 * 
 */
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 2; i++) {
    let minIndex = i

    for (let j = i; j < arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
}


// const someArray = [5,4,3,2,1]
// insertionSort(someArray)
// console.log(someArray)


// FIXME: Need to learn quickSort in detail

/**
 * Sorts an array using the quicksort algorithm.
 *
 * @param {Array} arr - The array to be sorted.
 * @return {Array} The sorted array.
 */
const quickSort = (arr) => {
/**
 * Sorts an array using the quicksort algorithm.
 *
 * @param {Array} arr - The array to be sorted.
 * @return {Array} The sorted array.
 * Worst Case = O(n^2)
 * Average Case = O(nlogn)
 */

  if (arr.length === 1) {
    return arr
  }

  let pivot = arr[arr.length - 1]
  let left = []
  let right = []

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    }else {
      right.push(arr[i])
    }
  }

  return [...quickSort(left), pivot ,...quickSort(right)]
}

/**
 * Sorts an array in ascending order using the merge sort algorithm.
 *
 * @param {Array} arr - The array to be sorted.
 * @return {Array} The sorted array.
 * 
 * Big Oh - O(nlogn)
 */
const mergeSort = (arr) => {
  if(arr.length < 2) {
    return arr
  }

  const mid = Math.floor(arr.length/2)

  let left = arr.slice(0,mid)
  let right = arr.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

/**
 * Merges two sorted arrays into one sorted array.
 *
 * @param {Array} left - The left sorted array.
 * @param {Array} right - The right sorted array.
 * @return {Array} The merged and sorted array.
 * 
 * Big Oh - O(n)
 */
const merge = (left, right) => {
  let sortedArr = []

  while(left.length && right.length){
    if(left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }

  return [...sortedArr, ...left, ...right]
}


let array = [ 8, 3, 5, -5, -3, 6]