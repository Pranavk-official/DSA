const DoublyLinkedList = require('../Linked Lists/Implementations/double')


let str = 'Hi Hrithunath'

let list = new DoublyLinkedList()

for (let i = 0; i < str.length; i++) {
    list.prepend(str[i])
}
let revString = '';
let currentNode = list.head
for (let i = 0; i < list.size ; i++, currentNode = currentNode.next) {
    revString += currentNode.data
}

console.log(revString);

// Array to List
// let arr = [1,23,4,5,66,78,98,10]

// let array = new DoublyLinkedList()

// for (let i = 0; i < arr.length; i++) {
    
//     array.append(arr[i])
    
// }

// array.display()

list.display()