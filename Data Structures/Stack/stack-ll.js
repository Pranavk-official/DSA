const LinkedList = require ('../Linked Lists/Implementations/singleWithTail');


class LinkedListStack {
    constructor() {
        this.list = new LinkedList()
    }

    push(data) {
        this.list.prepend(data)
    }

    pop() {
        this.list.removeFromFront()
    }

    peek() {
        return this.list.head.data
    }

    isEmpty() {
        return this.list.isEmpty()
    }
    
    getSize() {
        return this.list.getSize()
    }

    display() {
        return this.list.display()
    }
}


const stack = new LinkedListStack

console.log(stack.isEmpty())

stack.push(5)
stack.push(12)
stack.push(18)

console.log(stack.isEmpty())

stack.display()

stack.pop()

stack.display()

console.log(stack.peek())