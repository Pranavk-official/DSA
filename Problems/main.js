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

