/**
 * Doubly Linked List
 * 
 * 
 * Operation
 * 
    Insertion − Adds an element at the beginning of the list.

    Insert Last − Adds an element at the end of the list.

    Insert After − Adds an element after an item of the list.

    Deletion − Deletes an element at the beginning of the list.

    Delete Last − Deletes an element from the end of the list.

    Delete − Deletes an element from the list using the key.

    Display forward − Displays the complete list in a forward manner.

    Display backward − Displays the complete list in a backward manner.
 */


class Node {
    constructor(data){
        this.prev = null
        this.data = data
        this.next = null
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize() {
        return this.size
    }


    prepend(data) {
        let newNode = new Node(data);

        if(this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        }else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }

        this.size++
    }

    append(data) {
        let newNode = new Node(data)

        if(this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        }else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.size++
    }

    removeFromFront() {
        if(this.isEmpty()) {
            return null
        }

        const data = this.head.data
        this.head = this.head.next
        this.size++
    }

}