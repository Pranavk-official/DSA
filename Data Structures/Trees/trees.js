/**
 * Trees
 * 
 * Binary Tree
 * Binary Search Tree
 * AVL Tree
 * Red-Black Tree
/


/**
 * 
 * Binary Tree - each node has data and two children
 * - each node has at most two children
 * 
 * Operations
 * - isEmpty
 * - getSize
 * - insert
 * - delete
 * - search
 * - display
 * 
 */

// TODO: implement binary tree

/**
 * Binary Search Tree - each node has data and one child
 * - each node has at most one child
 *
 * Operations
 * - isEmpty
 * - getSize
 * - insert
 * - delete
 * - search
 * - display
 *
 *
 */

// TODO: implement binary search tree

class Node {
  /**
   * Creates a new instance of the Node class with the given data and sets the left and right properties to null.
   *
   * @param {*} data - The data to be stored in the node.
   */
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  /**
   * Initializes a new instance of the BinarySearchTree class with a null root.
   *
   * @return {void}
   */
  constructor() {
    this.root = null;
  }

  /**
   * Checks if the binary search tree is empty.
   *
   * @return {boolean} True if the tree is empty, false otherwise.
   */
  isEmpty() {
    return this.root === null;
  }

  /**
   * Inserts a new node with the given data into the binary search tree.
   *
   * @param {any} data - The data to be inserted into the binary search tree.
   * @return {void} This function does not return a value.
   */
  insert(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  /**
   * Inserts a new node into the binary search tree.
   *
   * @param {Node} root - The root node of the tree.
   * @param {Node} newNode - The new node to be inserted.
   * @return {void} This function does not return a value.
   */
  insertNode(root, newNode) {
    if (newNode.data < root.data) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  search(root = this.root, data) {
    // Tree is Empty

    if (this.isEmpty()) {
      console.log("Tree is Empty");
      return false;
    } else {
      // Tree is not Empty
      if (root.data === data) {
        return true;
      } else if (root.data > data) {
        return this.search(root.left, data);
      } else {
        return this.search(root.right, data);
      }
    }
  }

  /**
   * Depth First Search
   *
   * 1. Pre-Order Search
   *    - read data
   *    - vist left subtree
   *    - vist right subtree
   *
   * 2. In-Order Search
   *    - vist left subtree
   *    - read data
   *    - vist right subtree
   *
   * 3. Post-Order Search
   *    - vist left subtree
   *    - vist right subtree
   *    - read data
   */

  /**
   * Traverses the binary tree in pre-order and prints the data of each node.
   *
   * @param {Node} root - The root node of the binary tree.
   * @return {undefined} This function does not return a value.
   */
  preOrder(root = this.root) {
    if (root) {
      console.log(root.data);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  /**
   * Traverses the binary tree in in-order and prints the data of each node.
   *
   * @param {Node} root - The root node of the binary tree.
   * @return {undefined} This function does not return a value.
   */
  inOrder(root = this.root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.data);
      this.inOrder(root.right);
    }
  }

  /**
   * Traverses the binary tree in post-order and prints the data of each node.
   *
   * @param {Node} root - The root node of the binary tree.
   * @return {undefined} This function does not return a value.
   */
  postOrder(root = this.root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.data);
    }
  }

  /**
   * Breadth First Search - BFS
   *
   * 1. Create a Queue
   * 2. Enqueue the Root node
   * 2. As long as a node exist in the Queue
   *    a. Dequeue the node the node from the front
   *    a. Read the node's value
   *    a. Enqueue the node's left child if exist
   *    a. Enqueue the node's right child if exist
   */

  levelOrder() {
    // Should use the optimized queue implementation
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      let current = queue.shift();
      console.log(current.data);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  /**
   * Min Max - BST
   *
   * Prerequisite for deletion of node from BST
   *
   *
   */

  /**
   * Finds the minimum value in the binary search tree starting from the given root node.
   *
   * @param {Node} root - The root node of the binary search tree.
   * @return {*} The minimum value in the binary search tree.
   */
  min(root = this.root) {
    if (!root.left) {
      return root.data;
    } else {
      return this.min(root.left);
    }
  }

  /**
   * Finds the maximum value in the binary search tree starting from the given root node.
   *
   * @param {Node} root - The root node of the binary search tree.
   * @return {*} The maximum value in the binary search tree.
   */
  max(root = this.root) {
    if (!root.right) {
      return root.data;
    } else {
      return this.max(root.right);
    }
  }

  /**
   * Delete node from BST given it's value/data
   *
   * Case 1: No childrens
   * Case 2: 1 child node
   * Case 3: 2 child nodes
   * Case 3: 2 child nodes
   */

  /**
   * Deletes a node from the binary search tree given its data.
   *
   * @param {any} data - The data of the node to be deleted.
   * @return {void} This function does not return a value.
   */
  delete(data) {
    this.root = this.deleteNode(this.root, data);
  }

  /**
   * Deletes a node from the binary search tree given its data.
   *
   * @param {Node} root - The root node of the binary search tree.
   * @param {any} data - The data of the node to be deleted.
   * @return {Node|null} The updated root node of the binary search tree.
   */
  deleteNode(root, data) {
    if (root === null) {
      return null;
    }

    if (data < root.data) {
      root.left = this.deleteNode(root.left, data);
    } else if (data > root.data) {
      root.right = this.deleteNode(root.right, data);
    } else {
      // Case 1: No children
      if (!root.left && !root.right) {
        return null;
      }

      // Case 2: One child
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      // Case 3: Two children
      root.data = this.min(root.right);
      root.right = this.deleteNode(root.right, root.data);
    }
    return root;
  }
}

let bst = new BinarySearchTree();
let bst2 = new BinarySearchTree();
bst2.insert(10);
bst2.insert(5);

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log(bst.search(5));

console.log(bst.isEmpty());

bst2.preOrder();
console.log("\n");
bst.preOrder();
console.log("\n");
bst.inOrder();
console.log("\n");
bst.postOrder();
console.log("\n");
bst.levelOrder();

console.log("\n");
console.log(bst.max());
console.log(bst.min());

console.log("\n");
bst.delete(15);
bst.delete(7);

bst.levelOrder();
console.log('\n')

console.log(bst.max(bst.root));
console.log(bst.min(bst.root));

/**
 * AVL Tree - each node has data and two children
 * - each node has at most two children
 * - balance factor
 * - height of left and right subtree
 *
 * Operations
 * - isEmpty
 * - getSize
 * - insert
 * - delete
 * - search
 * - traversal
 *
 */

/**
 * Red-Black Tree - each node has data and two children
 * - each node has at most two children
 * - balance factor
 * - color
 *
 * Operations
 * - isEmpty
 * - getSize
 * - insert
 * - delete
 * - search
 * - traversal
 *
 */

