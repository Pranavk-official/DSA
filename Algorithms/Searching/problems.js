/**
 * Problem 153 - Find Minimum in Rotated Sorted Array
 *
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
 * For example, the array nums = [0,1,2,4,5,6,7] might become:
 *   - [4,5,6,7,0,1,2] if it was rotated 4 times.
 *   - [0,1,2,4,5,6,7] if it was rotated 7 times.
 *
 * Notice that rotating an array
 * [a[0], a[1], a[2], ..., a[n-1]] 1 time
 * results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
 *
 * Given the sorted rotated array nums of unique elements,
 * return the minimum element of this array.
 * You must write an algorithm that runs in O(log n) time.
 */

const findMin = (arr) => {
  let left = 0,
    right = arr.length - 1,
    res = arr[0];

  while (left <= right) {
    if (arr[left] < arr[right]) {
      res = Math.min(res, arr[left]);
      break;
    }

    let mid = Math.floor((left + right) / 2);
    res = Math.min(res, arr[mid]);

    // Binary Search

    if (arr[mid] >= arr[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return res;
};

/**
 * Problem 33 - Search in Rotated Sorted Array
 * 
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function, 
 * nums is possibly rotated at an 
 * unknown pivot index k (1 <= k < nums.length) 
 * such that the resulting array is 
 * [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
 * For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 * 
 * Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
 * You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1

 */

const search = (nums, target) => {
  let left = 0,
    right = nums.length - 1,
    mid = Math.floor((left + right) / 2);

    while(left <= right) {
        
        
        // Binary Search


    }
};
