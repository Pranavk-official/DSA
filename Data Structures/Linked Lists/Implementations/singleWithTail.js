/**
 * Linked List
 * 
 * Singly Linked List - Each node contains data and next
 * - implementation using head and tail pointer
 * 
 * Operations
 * - isEmpty
 * 
 * - getSize
 * 
 * - insertion
 *   - insert at beginning
 *   - insert at end
 *   - insert at position
 *   - insert after node
 *   - insert before node
 * 
 * - deletion
 *   - delete at beginning
 *   - delete at end
 *   - delete at position
 *   - delete after node
 *   - delete before node
 * 
 * - search
 *   - linear
 *   - binary
 * 
 * - display
 * - reverse
 * 
//  * Problems
 * - array to list
 * - list to array
 */

class Node {
  /**
   * Creates a new instance of the Node class with the given data and sets the next property to null.
   *
   * @param {*} data - The data to be stored in the node.
   */
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  /**
   * Initializes a new instance of the LinkedList class.
   *
   * @return {void}
   */
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  /**
   * Returns the size of the linked list.
   *
   * @return {number} The size of the linked list.
   */
  getSize() {
    return this.size;
  }

  /**
   * Displays the elements of the linked list.
   *
   * @return {undefined} This function does not return a value.
   */
  display() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let currentNode = this.head;
      let list = "";
      while (currentNode) {
        list += `${currentNode.data} `;
        currentNode = currentNode.next;
      }

      console.log(list);
    }
  }

  prepend(data) {
    let newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  append(data) {
    let newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }


  insertAfter(data,x) {
    if (this.isEmpty()) {
      return null
    }

    let newNode = new Node(data)
    let prev = this.head

    while(prev && prev.data !== x ){
      prev = prev.next
    }

    // console.log(prev);
    newNode.next = prev.next
    prev.next = newNode
    this.size++
  }
  insertBefore(data,x) {
    if (this.isEmpty()) {
      return null
    }

    let newNode = new Node(data)
    let prev = this.head

    while(prev && prev.next.data !== x ){
      prev = prev.next
    }

    // console.log(prev);

    newNode.next = prev.next
    prev.next = newNode
    this.size++
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }

    const data = this.head.data;
    this.head = this.head.next;
    this.size++;

    return data;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }

    const data = this.tail.data;

    if (this.size === 1) {
      this.head = null;
      this.null = null;
    } else {
      let prev = this.head;
      while (prev.next !== null) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
      this.size--;

      return data;
    }
  }

  removeFromMiddle() {
    if (this.isEmpty()) {
      return null;
    }

    let mid = Math.floor(this.size / 2);

    let prev = this.head;

    for (let i = 0; i < mid - 1; i++) {
      prev = prev.next;
    }

    let data = prev.next.data;
    prev.next = prev.next.next;

    return data;
  }

  reverse() {
    let previousNode = null
    let currentNode = this.head

    while(currentNode){
      let next = currentNode.next
      currentNode.next = previousNode
      previousNode = currentNode
      currentNode = next
    }

    this.head = previousNode
  }
}

module.exports = LinkedList

// const list = new LinkedList();

// list.prepend(3);
// list.prepend(4);
// list.prepend(5);

// list.append(7);
// list.append(8);


// // list.insert(6, 0);
// // list.insert(10, 4);

// // //   list.removeFrom(0);

// // //   list.removeData(8);
// // //   console.log(list.removeData(13));

// list.display();

// list.removeFromMiddle();

// // //   console.log(list.search(13));
// // //   console.log(list.search(5));
// // //   list.reverse();

// // console.log(list.removeFromFront())
// // console.log(list.removeFromEnd())

// list.display();
// list.removeFromMiddle();
// list.insertAfter(16, 4);
// list.insertBefore(17, 4);
// list.display();
// list.reverse();
// list.display();
