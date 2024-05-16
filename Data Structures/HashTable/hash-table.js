class HashTable {
  /**
   * Constructor for creating a new instance with a specified size.
   *
   * @param {number} size - the size of the array to be initialized
   * @return {void} 
   */
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  /**
   * Calculates the hash value for the given key.
   *
   * @param {string} key - The key to calculate the hash for
   * @return {number} The hash value of the key
   */
  hash(key) {
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.size;
  }

  /**
   * Set key-value pair in the hash table.
   *
   * @param {any} key - The key to set in the hash table
   * @param {any} value - The value corresponding to the key
   * @return {void} 
   */
  set(key, value) {
    const index = this.hash(key);
    // this.table[index] = value;

    const bucket = this.table[index]

    if (!bucket) {
        this.table[index] = [[key,value]]
    }else {
        const sameKeyItem = bucket.find(item => item[0] === key)
        if(sameKeyItem){
            sameKeyItem[1] = value
        }else {
            bucket.push([key,value])
        }
    }
  }

  get(key) {
    const index = this.hash(key);
    // return this.table[index];
    const bucket = this.table[index]
    if (bucket) {
        const sameKeyItem = bucket.find(item => item[0] === key)
        if (sameKeyItem) {
            return sameKeyItem[1]
        }
    }

    return undefined
  }

  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined

    const bucket = this.table[index]
    
    if (bucket) {
        
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
        if(this.table[i]){
            console.log(i, this.table[i]);
        }        
    }
  }
}

// instance of hashtable
const hashTable = new HashTable(50);

hashTable.set('name', 'Bruce')
hashTable.set('mane', 'Clark')
hashTable.set('food', 'Cake')
hashTable.set('age', 10)

hashTable.display()

hashTable.set('name', 'Diana')
hashTable.remove('name')

hashTable.display()
console.log(hashTable.get('name'));