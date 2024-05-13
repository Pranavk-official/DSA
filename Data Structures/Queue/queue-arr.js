class Queue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getSize() {
    return this.items.length;
  }

  front() {
    return this.items[0];
  }

  enqueue(data) {
    this.items.push(data);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Underflow");
      return;
    }

    return this.items.shift();
  }

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



