/**
 * A stack implementation using an array.
 */
class Stack {
  /**
   * Initializes a new Stack.
   */
  constructor() {
    this.items = [];
  }

  /**
   * Returns whether the stack is empty.
   * @returns {boolean} Whether the stack is empty.
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * Returns the top element of the stack.
   * @returns {any} The top element of the stack.
   */
  peek() {
    return this.items[this.items.length - 1];
  }

  /**
   * Returns the size of the stack.
   * @returns {number} The size of the stack.
   */
  getSize() {
    return this.items.length;
  }

  /**
   * Adds an element to the top of the stack.
   * @param {any} data The element to add.
   */
  push(data) {
    this.items.push(data);
  }

  /**
   * Removes and returns the top element of the stack.
   * @returns {any} The removed element.
   */
  pop() {
    if (this.isEmpty()) {
      console.log("Stack Underflow");
      return;
    }

    return this.items.pop();
  }

  /**
   * Displays all elements of the stack.
   */
  display() {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
      return;
    }

    let str = "";

    for (let i = 0; i < this.items.length; i++) {
      str += `${this.items[i]} `;
    }

    console.log(str);
  }
}
