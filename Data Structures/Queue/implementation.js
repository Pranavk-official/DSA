/**
 * Queue
 * FIFO
 * First In First Out
 *
 * Operations
 * - enqueue(item) : add an item to the end of the queue
 * - dequeue() : remove an item from the front of the queue
 * - isEmpty() : check if the queue is empty
 * - peek() : return the first item in the queue
 * - size() : return the number of items in the queue
 * - print() : print all the items in the queue
 */

// Queue implementation using Built-in JavaScript Array
// class Queue {
//     constructor() {
//         this.items = []
//     }

//     enqueue(item) {
//         this.items.push(item)
//         // .push() adds an element to the end of the array
//     }

//     dequeue() {
//         this.items.shift()
//         // .shift() removes and returns the first element of the array
//     }

//     isEmpty() {
//         if(this.items.length === 0) {
//             return true
//         }
//         return false
//     }

//     peek() {
//         if (!this.isEmpty()) {
//             return this.items[0]
//         }

//         return null
//     }

//     size() {
//         return this.items.length
//     }

//     print() {
//         for (let i = 0; i < this.items.length; i++) {
//             console.log(this.items[i]);
//         }
//     }
// }

// Queue implementation using Objects

class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(item) {
    this.items[this.rear] = item;
    this.rear++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  peek() {
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    for (let i = this.front; i < this.rear; i++) {
      console.log(this.items[i]);
    }
  }
}

/**
 * Circular Queue
 *
 * FIFO
 * First In First Out
 *
 * Operations
 * - enqueue(item) : add an item to the back of the queue
 * - dequeue() : remove an item from the front of the queue
 * - isFull() : check if the queue is full
 * - isEmpty() : check if the queue is empty
 * - peek() : return the first item in the queue
 * - size() : return the number of items in the queue
 * - print() : print all the items in the queue
 */

class CircularQueue {
  constructor(size) {
    this.items = new Array(size);
    this.front = -1;
    this.rear = -1;
    this.size = size;
    this.currentLength = 0;
  }

  isFull() {
    return this.currentLength === this.size;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(item) {
    // if queue is not full then enqueue
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.size;
      this.items[this.rear] = item;
      this.currentLength += 1;

      // if this.front is pointing to -1
      // then set it to 0 for first element
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.items[this.front];

    this.items[this.front] = null;
    this.front = this.front + 1;
    this.currentLength -= 1;

    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }

    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }

    return null;
  }

  size() {
    return this.currentLength;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    let i;
    let str = "";
    for (i = this.front; i != this.rear; i = (i + 1) % this.size) {
      str += this.items[i] + " ";
    }

    str += this.items[i];
    console.log(str);
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(queue.size());
console.log("\n");
console.log(queue.peek());
console.log("\n");
queue.print();

queue.dequeue();
console.log("\n");
console.log(queue.peek());
console.log("\n");
queue.print();

console.log("\n\n CIRCULAR QUEUE \n\n");

// CIRCULAR QUEUE

const circularQueue = new CircularQueue(5);

console.log(circularQueue);
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);

circularQueue.print();
console.log(circularQueue.isFull());
console.log(circularQueue);

console.log(circularQueue.peek());

circularQueue.dequeue();
circularQueue.enqueue(55);
circularQueue.print(55);

console.log(circularQueue.peek());
