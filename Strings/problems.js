const DoublyLinkedList = require('../Linked Lists/Implementations/double')


let str = 'Hello World'

let list = new DoublyLinkedList()

for (let i = 0; i < str.length; i++) {
    list.prepend(str[i])
}

list.display()