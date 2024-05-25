// TODO: complete all the problems
/**
 * Arrays and Hashing
 * 
 * 1. Contains Duplicate
 * 2. Valid Anagram
 * 3. Two Sum
 * 4. Group Anagrams 
 * 5. Top K Frequent Elements
 * 6. Encode and Decode Strings [Leetcode pro]
 * 7. Product of Array Except Self
 * 8. Longest Consecutive Sequence
*/


// TODO: complete all the problems
/**
 * Two Pointers
 * 
 * 1. Valid Palindrome
 * 2. 3Sum
 * 3. Container With Most Water
*/


// Valid Palindrome [Leetcode 125]

var isPalindrome = function (s) {
    // Not using built in String methods
    let l = 0, r = s.length - 1;

    while(l < r){
        // Skip non-alphanumeric characters from left
        while(l < r &&!isAlphaNum(s[l])) {
            l += 1;
        }
        // Skip non-alphanumeric characters from right
        while(r > l &&!isAlphaNum(s[r])) {
            r -= 1;
        }

        // Compare characters after converting them to lower case
        if(s[l].toLowerCase()!== s[r].toLowerCase()){
            return false;
        }

        l += 1;
        r -= 1;
    }

    return true;
};

var isAlphaNum = (char) => {
    let charCode = char.charCodeAt(0)

    return ((charCode >= 48 && charCode <= 57) || // Numeric characters
        (charCode >= 65 && charCode <= 90) || // Uppercase alphabetic characters
        (charCode >= 97 && charCode <= 122) // Lowercase alphabetic characters
    )
}


// 3Sum [Leetcode 15]


// TODO: complete all the problems
/**
 * Sliding Window
 * 
 * 1. Best Time to Buy And Sell Stock   	
 * 2. Longest Substring Without Repeating Characters   	
 * 3. Longest Repeating Character Replacement   	
 * 4. Minimum Window Substring   
*/

// TODO: complete all the problems
/**
 * Stack 
 * 
 * 1. Valid Parentheses
*/

// TODO: complete all the problems
/**
 * Binary Search
 * 
 * 1. Find Minimum In Rotated Sorted Array   	
 * 2. Search In Rotated Sorted Array
*/


// TODO: complete all the problems
/**
 * Linked List
 * 
 * 1. Reverse Linked List   	
 * 2. Merge Two Sorted Lists   	
 * 3. Reorder List   	
 * 4. Remove Nth Node From End of List   	
 * 5. Linked List Cycle   	
 * 6. Merge K Sorted Lists   
*/

// TODO: complete all the problems
/**
 * Trees
 * 
 * 1. Invert Binary Tree   	
 * 2. Maximum Depth of Binary Tree   	
 * 3. Same Tree   	
 * 4. Subtree of Another Tree   	
 * 5. Lowest Common Ancestor of a Binary Search Tree   	
 * 6. Binary Tree Level Order Traversal   	
 * 7. Validate Binary Search Tree   	
 * 8. Kth Smallest Element In a Bst   	
 * 9. Construct Binary Tree From Preorder And Inorder Traversal   	
 * 10. Binary Tree Maximum Path Sum   	
 * 11. Serialize And Deserialize Binary Tree   	
*/

// Invert Binary Tree [Leetcode 226]

// Maximum Depth of Binary Tree [Leetcode 104]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = (root) => {
    
};

// TODO: complete all the problems
/**
 * Heap/Priority Queue
 *  
 * 1. Find Median From Data Stream
*/


/**
 * Backtracking
 * 
 * 1. Combination Sum   	
 * 2. Word Search 
*/

// TODO: complete all the problems
/**
 * Tries
 * 
 * 1. Implement Trie Prefix Tree   	
 * 2. Design Add And Search Words Data Structure   	
 * 3. Word Search II   
 */


// TODO: complete all the problems
/**
 * Graph
 * 
 * 1. Number of Islands   	
 * 2. Clone Graph   	
 * 3. Pacific Atlantic Water Flow   	
 * 4. Course Schedule   	
 * 5. Graph Valid Tree   	
 * 6. Number of Connected Components In An Undirected Graph   
*/



// TODO: complete all the problems
/**
 * Advanced Graph
 * 
 * 1. Alien Dictionary   
 */

