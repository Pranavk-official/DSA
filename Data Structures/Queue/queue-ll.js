const LinkedList = require("../Linked Lists/Implementations/singleWithTail");

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(data) {
    this.list.append(data);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.data;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  display() {
    return this.list.display();
  }
}

const queue = new LinkedListQueue();

console.log(queue.isEmpty());

queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(6);
queue.enqueue(7);

queue.display();

queue.dequeue();

console.log(queue.peek());

queue.display();
