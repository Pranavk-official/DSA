class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  getSize() {
    return this.items.length;
  }

  push(data) {
    this.items.push(data);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack Underflow");
      return;
    }

    return this.items.pop();
  }

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
