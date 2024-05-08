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
        this.head.prev = null
        this.size--

        return data
    }

    removeFromEnd() {
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else {
            let removeNode = this.tail

            this.tail = this.tail.prev
            this.tail.next = null
            removeNode.prev = null

            return removeNode.data
        }
    }

    /**
     * Inserts a new node with the given data at the specified index in the linked list.
     *
     * @param {any} data - The data to be inserted into the linked list.
     * @param {number} index - The index at which the new node should be inserted.
     * @return {void} This function does not return anything.
     */
    insert(data, index) {
        if(index < 0 || index > this.size) {
            return;
        }

        if(index == 0){
            this.prepend(data)
        }else if(index === this.size) {
            this.append(data)
        }else {
            const newNode = new Node(data)
            let prev = this.head;
            
            for(let i = 0; i < index; i++){
                prev = prev.next;
            }

            newNode.next = prev.next;
            prev.next.prev = newNode
            newNode.prev = prev;
            prev.next = newNode
            this.size++
        }
    }

    /**
     * Inserts a new node with the provided data after the node containing the specified value.
     *
     * @param {any} data - The data for the new node.
     * @param {any} x - The value after which the new node will be inserted.
     * @return {void} This function does not return anything.
     */
    insertAfter(data,x){
        if(this.isEmpty()) {
            return null
        }

        let newNode = new Node(data)
        let prev = this.head
        
        while(prev && prev.data !== x){
            prev = prev.next
        }

        newNode.next = prev.next
        prev.next.prev = newNode

        prev.next = newNode
        newNode.prev = prev

        this.size++
    }
    


    insertBefore(data, x) {
        if(this.isEmpty()){
            return null
        }

        
    }

    
    /**
     * Displays the elements of the linked list.
     *
     * @return {void} This function does not return a value.
     */
    display() {
        if(this.isEmpty()){
            console.log("list is empty")
        }else {
            let currentNode = this.head
            let list = ""

            while (currentNode) {
                list += ` ${currentNode.data} `
                currentNode = currentNode.next
            }

            console.log(list)
        }
    }

    displayReverse() {
        if(this.isEmpty()){
            console.log("list is empty")
        }else {
            let currentNode = this.tail
            let list = ""

            while (currentNode) {
                list += ` ${currentNode.data} `
                currentNode = currentNode.prev
            }

            console.log(list)
        }
    }
}


// module.exports = DoublyLinkedList

const dll = new DoublyLinkedList()

dll.prepend(10)
dll.prepend(20)
dll.prepend(30)
dll.append(35)
dll.append(45)
dll.append(55)


dll.display()
// dll.displayReverse()

dll.insertAfter(7,20)

dll.display()

// dll.removeFromEnd()
// dll.removeFromFront()
// dll.display()
// console.log(dll.getSize())