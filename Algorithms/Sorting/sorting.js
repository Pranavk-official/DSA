/**
 * Sorts an array in ascending order using the bubble sort algorithm.
 *
 * @param {Array} arr - The array to be sorted.
 * @return {undefined} This function does not return a value.
 * 
 * Big Oh - O(n^2)
 * 
 */
const bubbleSort = (arr) => {
  let swapped;

  do {
    for (let i = 0; i < array.length - 1; i++) {
      swapped = false;
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};


const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i]
    let j = i -1 

    while(j>=0 && arr[j] > numberToInsert){
      arr[j+1] = arr[j]
      j -= 1
    }
    arr[j+1] = numberToInsert
  }
}

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
const selectionSort = (arr) => {}


// FIXME: Need to learn quickSort in deep
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