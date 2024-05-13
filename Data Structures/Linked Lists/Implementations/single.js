/**
 * Linked List
 * 
 * Singly Linked List - Each node contains data and next
 * - basic implementation using head pointer
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
   * Adds a new node with the given data to the beginning of the linked list.
   *
   * @param {*} data - The data to be stored in the new node.
   * @return {void} This function does not return a value.
   */
  prepend(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;
  }

  
  /**
   * Appends a new node with the given data to the end of the linked list.
   *
   * @param {*} data - The data to be stored in the new node.
   * @return {void} This function does not return a value.
   */
  append(data) {
    const newNode = new Node(data);

    // Empty List
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      // List not Empty
      let currentNode = this.head;

      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }

    this.size++;
  }

  /**
   * Inserts a new node with the given data at the specified index in the linked list.
   *
   * @param {*} data - The data to be stored in the new node.
   * @param {number} index - The index at which the new node should be inserted.
   * @return {void} This function does not return a value.
   */
  insert(data, index) {
    if (index < 0 || index > this.size) {
      return;
    }

    if (index == 0) {
      this.prepend(data);
    } else {
      const newNode = new Node(data);
      let prev = this.head;

      for (let i = 0; i < index; i++) {
        prev = prev.next;
      }

      newNode.next = prev.next;
      prev.next = newNode;
      this.size++;
    }
  }

  /**
   * Removes a node from the linked list at the specified index.
   *
   * @param {number} index - The index of the node to be removed.
   * @return {*} The data stored in the removed node, or null if the index is invalid.
   */
  removeFrom(index) {
    // Invalid index
    if (index < 0 || index >= this.size) {
      return null;
    }

    let removeNode;
    // Index = 0
    if (index == 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      // Index > 0
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      removeNode = prev.next;
      prev.next = removeNode.next;
    }

    this.size--;
    return removeNode.data;
  }

  /**
   * Removes a node from the linked list that contains the specified data.
   *
   * @param {*} data - The data to be removed from the linked list.
   * @return {*} The data that was removed from the linked list, or null if the data was not found.
   */
  removeData(data) {
    if (this.isEmpty()) {
      return null;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      this.size--;
      return data;
    } else {
      // remove value after head
      let prev = this.head;

      while (prev.next && prev.next.data !== data) {
        prev = prev.next;
      }
      if (prev.next) {
        const removeNode = prev.next;
        prev.next = removeNode.next;
        this.size--;
        return data;
      }
    }
  }

  /**
   * Searches for a node with the given data in the linked list.
   *
   * @param {*} data - The data to search for.
   * @return {number} The index of the node if found, -1 otherwise.
   */
  search(data) {
    if (this.isEmpty()) {
      return -1;
    }

    let i = 0,
      currentNode = this.head;

    while (currentNode) {
      if (currentNode.data == data) {
        return i;
      }

      currentNode = currentNode.next;
      i++;
    }

    return -1;
  }

  
/**
 * Reverses the linked list.
 *
 * @return {void} This function does not return a value.
 */
  reverse() {
    let prev = null
    let currentNode = this.head

    while(currentNode){
      let next = currentNode.next
      currentNode.next = prev
      prev = currentNode
      currentNode = next
    }

    this.head = prev
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
}

const list = new LinkedList();

list.prepend(3);
list.prepend(4);
list.prepend(5);

list.append(7);
list.append(8);

list.insert(6, 0);
list.insert(10, 4);

list.display();

list.removeFrom(0);

list.removeData(8);
console.log(list.removeData(13));

list.display();

console.log(list.search(13));
console.log(list.search(5));


list.display();
list.append(55)
list.reverse();

list.append(55)
list.display();