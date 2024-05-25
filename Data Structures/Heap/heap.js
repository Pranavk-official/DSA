class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(data) {
    this.values.push(data);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (element <= parent) break;

      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftIdx = 2 * index + 1;
      let rightIdx = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftIdx < length) {
        leftChild = this.values[leftIdx];
        if (leftChild > element) {
          swap = leftIdx;
        }
      }

      if (rightIdx < length) {
        rightChild = this.values[rightIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;

      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    
    if(this.values.length > 0){
        this.values[0] = end;
        this.bubbleDown();
    }

    return max;
  }
}


class MinBinaryHeap {
    constructor(){
        this.values = []
    }

    insert(data) {
        this.values.push(data);
        this.bubbleUp();
      }
    
      bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
    
        while (index > 0) {
          let parentIndex = Math.floor((index - 1) / 2);
          let parent = this.values[parentIndex];
    
          if (element >= parent) break;
    
          this.values[parentIndex] = element;
          this.values[index] = parent;
          index = parentIndex;
        }
      }
    
      bubbleDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
    
        while (true) {
          let leftIdx = 2 * index + 1;
          let rightIdx = 2 * index + 2;
          let leftChild, rightChild;
          let swap = null;
    
          if (leftIdx < length) {
            leftChild = this.values[leftIdx];
            if (leftChild < element) {
              swap = leftIdx;
            }
          }
    
          if (rightIdx < length) {
            rightChild = this.values[rightIdx];
            if (
              (swap === null && rightChild < element) ||
              (swap !== null && rightChild < leftChild)
            ) {
              swap = rightIdx;
            }
          }
    
          if (swap === null) break;
    
          this.values[index] = this.values[swap];
          this.values[swap] = element;
          index = swap;
        }
      }
      extractMin() {
        const min = this.values[0];
        const end = this.values.pop();
        
        if(this.values.length > 0){
            this.values[0] = end;
            this.bubbleDown();
        }
    
        return min;
      }
}

const heap = new MaxBinaryHeap();
const minHeap = new MinBinaryHeap();

heap.insert(41);
heap.insert(6);
heap.insert(13);
heap.insert(45);
heap.insert(55);

minHeap.insert(41);
minHeap.insert(6);
minHeap.insert(13);
minHeap.insert(45);
minHeap.insert(55);

console.log(heap.extractMax())
console.log(minHeap);
console.log(minHeap.extractMin())

console.log(heap);
console.log(minHeap);
