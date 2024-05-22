const DoublyLinkedList = require('../Linked Lists/Implementations/double')


let str = 'Hi Hrithunath'

let list = new DoublyLinkedList()

for (let i = 0; i < str.length; i++) {
    list.prepend(str[i])
}
let revString = '';
let currentNode = list.head
for (let i = 0; i < list.size ; i++, currentNode = currentNode.next) {
    revString += currentNode.data
}

console.log(revString);

// Array to List
// let arr = [1,23,4,5,66,78,98,10]

// let array = new DoublyLinkedList()

// for (let i = 0; i < arr.length; i++) {
    
//     array.append(arr[i])
    
// }

// array.display()

list.display()




/**
 * Valid Anagram
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * 
 * An Anagram is a word or phrase formed by rearranging 
 * the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 * 
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false
    }

    let lookup = {}

    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }

    console.log(lookup);
    
    for (let i = 0; i < t.length; i++) {
        const letter = t[i];
        
        if (!lookup[letter]) {
            return false
        }else {
            lookup[letter] -= 1
        }
        
    }
    
    console.log(lookup);
    return true
}



console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('anagrams', 'nagaramm'));
console.log(isAnagram('rat', 'car'));