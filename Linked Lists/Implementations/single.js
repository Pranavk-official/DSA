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
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  getSize() {
    return this.size;
  }

  //   O(1)
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

  // O(n)
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

  removeData (data) {
    if (this.isEmpty()) {
      return null
    }

    if (this.head.data === data) {
      this.head = this.head.next
      this.size--
      return data
    }else {
      // remove value after head
      let prev = this.head;

      while(prev.next && prev.next.data !== data ){
        prev = prev.next
      }
      if(prev.next){
        const removeNode = prev.next
        prev.next = removeNode.next
        this.size--
        return data
      }
    }
  }

  search(data) {
    if (this.isEmpty()) {
      return -1
    }

    let i = 0, 
        currentNode = this.head;

    while(currentNode){
      if (currentNode.data == data) {
        return i
      }

      currentNode = currentNode.next
      i++
    }

    return -1
  }

  // reverse a linked list
  reverse() {
    
  }

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

list.removeData(8)
console.log(list.removeData(13))

list.display();


console.log(list.search(13))
console.log(list.search(5))

