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

class Queue {
    constructor() {
        this.items = []
    }

    enqueue(item) {
        this.items.push(item)
        // .push() adds an element to the end of the array
    }

    dequeue() {
        this.items.shift()
        // .shift() removes and returns the first element of the array
    }

    isEmpty() {
        if(this.items.length === 0) {
            return true
        }
        return false
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0]
        }

        return null
    }

    size() {
        return this.items.length
    }

    print() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

console.log(queue.size());
console.log('\n')
queue.print()

queue.dequeue()
console.log('\n')
queue.print()