/**
 * Tries
 * 
 *   AKA: Prefix Tree or Trie
 * 
 * - Trie is a data structure that stores a collection of key-value pairs
 * - Each key is a string
 * - Each value can be any value
 * - Each key can have multiple values
 * - Each key can have multiple children
 * - Each child can have multiple children
 * - Implementation is done using a hash table with linked lists
 * 
 * - Search is O(n)
 * - Insert is O(n)
 * - Delete is O(n)
 * 
 * 
 */


class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
}