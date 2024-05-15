/**
 * Queue implementation using an array
 *
 */
class Queue {
  /**
   * Create a new Queue instance
   * @param {Array} [items=[]] - The internal array used to store the queue elements
   */
  constructor(items = []) {
    this.items = items;
  }

  /**
   * Check if the queue is empty
   * @return {boolean} True if the queue is empty, false otherwise
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Get the size of the queue
   * @return {number} The size of the queue
   */
  getSize() {
    return this.items.length;
  }

  /**
   * Get the element at the front of the queue
   * @return {*} The element at the front of the queue
   */
  front() {
    return this.items[0];
  }

  /**
   * Add an element to the end of the queue
   * @param {*} data - The element to add to the end of the queue
   */
  enqueue(data) {
    this.items.push(data);
  }

  /**
   * Remove the element at the front of the queue
   * @return {*} The element at the front of the queue
   */
  dequeue() {
    if (this.isEmpty()) {
      console.log("Underflow");
      return;
    }

    return this.items.shift();
  }

  /**
   * Display all elements in the queue
   */
  display() {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    }

    let str = "";

    for (let i = 0; i < this.items.length; i++) {
      str += `${this.items[i]} `;
    }

    console.log(str);
  }
}
