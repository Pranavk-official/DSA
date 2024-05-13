// TODO: Cartesian Product

/**
 * Generates the Cartesian product of two arrays.
 *
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @return {Array} The Cartesian product of arr1 and arr2.
 * 
 * Big Oh - O(m*n)
 */
const cartesianProduct = (arr1,arr2) => {
    let result = []

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]])
        }        
    }

    return result 
}


// TODO: Climbing Stairs

/**
 * Calculates the number of ways to climb a staircase with n steps.
 *
 * @param {number} n - The number of steps in the staircase.
 * @return {number} The number of ways to climb the staircase.
 * 
 * Big Oh - O(n)
 */
const climbingStaircase = (n) =>{
    const noOfWay = [1,2]

    for (let i = 2; i < n - 1; i++) {
        noOfWay[i] = noOfWay[i-1] + noOfWay[i-2]
    }

    return noOfWay[n -1]
} 


// TODO: Tower of Hanoi

/**
 * Recursively solves the Tower of Hanoi puzzle with n disks.
 *
 * @param {number} n - The number of disks.
 * @param {string} from - The source peg.
 * @param {string} to - The destination peg.
 * @param {string} using - The auxiliary peg.
 * @return {undefined} This function does not return a value.
 * 
 * Big Oh - O(2^n)
 */
const towerOfHanoi = (n, from, to, using) => {
    if (n === 1) {
        console.log(`Move disk 1 from ${from} to ${to} `);
        return
    }

    towerOfHanoi(n-1, from, using, to)
    console.log(`Move disk ${n} from ${using} to ${to}`);
    towerOfHanoi(n-1,using, to, from)
    console.log(`Move disk ${n} from ${using} to ${to}`);   
}