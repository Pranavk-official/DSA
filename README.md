# DSA - JavaScript


This is a JavaScript based implementation of all the Data Structures and Algorithms.

<details>
<summary> Basic Theory Questions To Revise. (click to read more)</summary>


1. **Data Structure:**
   - Data structures are ways of organizing and storing data in a computer so that it can be accessed and modified efficiently. Common data structures include arrays, linked lists, stacks, queues, trees, and graphs.

2. **Complexity Analysis:**
   - Complexity analysis involves analyzing the performance characteristics of algorithms and data structures. It helps us understand how the time and space requirements of a program grow as the input size increases.

3. **Asymptotic Analysis:**
   - Asymptotic analysis is a technique used in complexity analysis to describe the behavior of algorithms as the input size approaches infinity. It focuses on the dominant terms of the algorithm's time and space complexity and ignores constants and lower-order terms.

4. **Big O Notation:**
   - Big O notation is a mathematical notation used to describe the upper bound or worst-case scenario of the time or space complexity of an algorithm. It provides a way to express how the time or space requirements of an algorithm grow relative to the size of the input.

5. **Memory Leaks:**
   - Memory leaks occur when a program fails to release memory that it no longer needs, leading to memory consumption increasing over time. Memory leaks can cause a program to run out of memory, slow down, or crash. They are typically caused by bugs in the program logic or improper memory management.


6. **Linear vs Non-Linear Data Structures:**
   - **Linear Data Structures:** Linear data structures organize elements sequentially, meaning each element has a predecessor and a successor, forming a linear relationship. Examples include arrays, linked lists, stacks, and queues.
   - **Non-Linear Data Structures:** Non-linear data structures do not organize elements in a sequential manner. Instead, they form hierarchical or tree-like structures where each element can have multiple predecessors and successors. Examples include trees, graphs, and heaps.

7. **Linked List:**
   - A linked list is a linear data structure consisting of a sequence of elements called nodes.
   - Each node contains two fields: a data field to store the element and a reference (or pointer) field to point to the next node in the sequence.
   - Linked lists can be singly linked, where each node points to the next node, or doubly linked, where each node points to both the next and previous nodes.

8. **Singly and Doubly Linked List:**
   - **Singly Linked List:** In a singly linked list, each node contains a reference to the next node in the sequence.
   - **Doubly Linked List:** In a doubly linked list, each node contains references to both the next and previous nodes in the sequence, allowing for bidirectional traversal.

9. **Linear Search:**
   - Linear search is a simple searching algorithm that sequentially checks each element in a collection until a match is found or the entire collection has been traversed.
   - It has a time complexity of O(n), where n is the number of elements in the collection.

10. **Binary Search:**
   - Binary search is a fast searching algorithm used on sorted collections to find the position of a target value.
   - It works by repeatedly dividing the search interval in half until the target value is found or the interval is empty.
   - Binary search has a time complexity of O(log n), where n is the number of elements in the sorted collection.

11. **Application of Linked List:**
   - Linked lists are commonly used in scenarios where dynamic memory allocation and efficient insertion/deletion operations are required.
   - Applications of linked lists include implementing stacks, queues, hash tables, adjacency lists for graphs, and memory allocation for dynamic data structures like trees and graphs.

12. **Array vs Linked List:**
   - Arrays offer constant-time access to elements and are ideal for random access and fixed-size collections.
   - Linked lists provide efficient insertion and deletion operations and are suitable for dynamic-size collections and scenarios where frequent modifications are required.

13. **Recursion:**
   - Recursion is a programming technique where a function calls itself directly or indirectly to solve a problem.
   - Recursive functions break down a problem into smaller subproblems and solve each subproblem recursively until a base case is reached.
   - Recursion is commonly used in algorithms involving tree and graph traversal, divide-and-conquer algorithms, and problems with a recursive structure.

14. **Stack and Heap Memory:**
   - Stack and heap are two regions of memory used for storing data in computer programs.
   - Stack memory is used for storing local variables, function call information, and control flow data. It operates in a last-in-first-out (LIFO) fashion, where the most recently allocated memory is deallocated first.
   - Heap memory is used for dynamic memory allocation, where memory is allocated and deallocated manually at runtime. It operates in a more flexible manner, allowing memory allocation and deallocation in any order.

15. **Data Structures:**
   - Data structures are ways of organizing and storing data in a computer so that it can be accessed and manipulated efficiently. They provide operations for inserting, deleting, searching, and retrieving data.
   - Common data structures include arrays, linked lists, stacks, queues, trees, and graphs. Each data structure has its own advantages, disadvantages, and use cases.

16. **Complexity Analysis:**
   - Complexity analysis involves analyzing the performance characteristics of algorithms and data structures. It helps us understand how the time and space requirements of a program grow as the input size increases.
   - Time complexity describes how the runtime of an algorithm scales with the size of the input, often expressed using Big O notation. Space complexity describes how the memory usage of an algorithm scales with the size of the input.

17. **Drawbacks of Recursion:**
   - Recursion is a programming technique where a function calls itself directly or indirectly to solve a problem. While recursion can lead to elegant and concise solutions, it has several drawbacks:
     - **Stack Overflow:** Recursion can lead to stack overflow errors if the depth of recursion becomes too large, exhausting the stack space.
     - **Performance Overhead:** Recursive function calls can have a performance overhead due to the additional function calls and stack frame management.
     - **Difficulty in Understanding:** Recursive solutions can be harder to understand and debug compared to iterative solutions, especially for beginners.
     - **Potential for Infinite Recursion:** Recursive functions may accidentally enter infinite recursion if not properly implemented, leading to program crashes or hangs.

18. **Heterogeneous Array:**
   - A heterogeneous array is an array that can store elements of different data types.
   - For example, an array may contain integers, strings, floats, and other data types within the same array.

19. **Homogeneous Array:**
   - A homogeneous array is an array that can store elements of only one data type.
   - All elements in a homogeneous array must be of the same data type, such as integers, strings, or floats.

20. **Jagged Array:**
   - A jagged array, also known as an array of arrays, is an array whose elements are arrays themselves.
   - Unlike a multi-dimensional array, jagged arrays can have rows of varying lengths.
   - Each element of the jagged array can have a different length, allowing for irregular data structures.

21. **Sparse Array:**
   - A sparse array is an array that contains mostly empty or zero elements.
   - Sparse arrays are used to efficiently represent data sets where most elements are zero or do not exist.
   - Instead of allocating memory for every element, sparse arrays store only non-zero or non-empty elements along with their indices.

22. **Multi-dimensional Array:**
   - A multi-dimensional array is an array with more than one dimension.
   - Common examples include 2D arrays (matrices), 3D arrays (cubes), and higher-dimensional arrays.
   - Multi-dimensional arrays are used to represent data in multiple dimensions, such as rows and columns in a table or x, y, and z coordinates in space.

23. **Dynamic Array:**
   - A dynamic array is an array data structure that can dynamically resize itself to accommodate a varying number of elements.
   - Dynamic arrays typically allocate more memory than needed initially and resize themselves when the number of elements exceeds the allocated capacity.
   - Examples of dynamic arrays include ArrayList in Java and std::vector in C++.

24. **Holes in Array:**
   - Holes in an array refer to unallocated or unused memory slots between elements in the array.
   - Holes can occur in arrays with gaps between elements due to deletions or uninitialized elements.
   - Accessing holes in an array may lead to undefined behavior or unexpected results, as the values in these slots are unpredictable.

25. **Bit, Bytes, and Other Units in Memory:**
   - Memory is measured in units such as bits (smallest unit), bytes (8 bits), kilobytes (KB), megabytes (MB), gigabytes (GB), and so on.
   - These units are used to quantify the amount of data that can be stored or processed by a computer system.

26. **Stack vs Heap Memory:**
   - Stack and heap are two regions of memory used for different purposes in computer programs.
   - Stack memory is used for storing function call information, local variables, and control flow data. It operates in a last-in-first-out (LIFO) manner.
   - Heap memory is used for dynamic memory allocation, where memory is allocated and deallocated manually at runtime. It operates in a more flexible manner, allowing memory allocation and deallocation in any order.

27. **Immutable vs Mutable:**
   - Immutable data cannot be changed after creation, while mutable data can be modified.
   - Immutable data structures offer advantages such as thread safety, easier reasoning about program behavior, and efficient caching.
   - Mutable data structures offer advantages such as in-place modification, potentially better performance for large datasets, and more flexibility.

28. **Immutable Data Types in JavaScript:**
   - In JavaScript, primitive data types such as numbers, strings, and booleans are immutable.
   - However, objects (including arrays and functions) are mutable, meaning their contents can be modified.

29. **Kilobyte vs Kibibyte:**
   - Kilobyte (KB) is a unit of digital information equal to 1000 bytes, commonly used in the metric system.
   - Kibibyte (KiB) is a unit of digital information equal to 1024 bytes, commonly used in the binary system.
   - The difference between KB and KiB arises from the discrepancy between the decimal and binary numbering systems.

30. **Disadvantages of Dynamic Memory Allocation:**
   - Dynamic memory allocation can lead to memory fragmentation, where memory is allocated in small, non-contiguous blocks, making it challenging to find contiguous blocks for larger allocations.
   - Dynamic memory allocation can also introduce overhead due to the need to manage memory allocation and deallocation manually, potentially impacting performance.

31. **Advantages of Dynamic Memory Allocation:**
   - Dynamic memory allocation allows for flexible memory usage, enabling the creation of data structures with sizes determined at runtime.
   - It enables efficient memory usage by allocating memory only when needed and deallocating it when no longer required.
   - Dynamic memory allocation supports dynamic resizing of data structures, allowing them to grow or shrink as needed.


32. **Unicode:**
   - Unicode is a character encoding standard that assigns a unique code point to every character and symbol in every writing system.
   - It allows computers to represent and manipulate text from any language or script, including emojis and special characters.

33. **ASCII:**
   - ASCII (American Standard Code for Information Interchange) is a character encoding standard used to represent text in computers and communication equipment.
   - It assigns a unique numerical value (0-127) to each character, including letters, numbers, punctuation marks, and control characters.

34. **Escape Sequences:**
   - Escape sequences are combinations of characters that represent special characters or actions within a string literal or character literal.
   - They begin with a backslash (`\`) followed by one or more characters, such as `\n` for a newline or `\t` for a tab.

35. **`\0`:**
   - `\0` is an escape sequence representing the null character (ASCII value 0).
   - It is used to terminate strings in languages like C and C++.

36. **Control Characters:**
   - Control characters are non-printable characters used to control devices such as printers or to represent special actions within text.
   - Examples include newline (`\n`), carriage return (`\r`), tab (`\t`), and null character (`\0`).

37. **LF (Line Feed):**
   - LF is a control character (ASCII value 10) representing a line feed or new line.
   - It is used to move the cursor to the next line in a text document.

38. **Cyclic Reference:**
   - Cyclic reference, also known as circular reference, occurs when two or more objects reference each other in a loop.
   - This can lead to memory leaks or unexpected behavior if not handled properly, especially in garbage-collected languages.

39. **Weak Ref (Weak Reference):**
   - A weak reference is a reference to an object that does not prevent the object from being garbage collected.
   - Weak references are often used in languages with garbage collection to implement caches or caches.

40. **Virtual Memory:**
   - Virtual memory is a memory management technique that provides an illusion of infinite memory to processes by using disk storage as an extension of RAM.
   - It allows multiple processes to run simultaneously, each with its own address space.

41. **Garbage Collection:**
    - Garbage collection is a memory management technique used to automatically reclaim memory occupied by objects that are no longer in use.
    - It identifies and releases memory occupied by unreachable objects, preventing memory leaks and improving program efficiency.


</details>


<details>
<summary>...</summary>
    1. chunk array into sub1. rrays of n elements (problem 1d to 2d)
    2. Unicode
    3. ASCII
    4. escape sequences
    5. \0
    6. control charecters 
    7. LF
    8. cyclic reference
    9. Weak Ref
    10. virtual memory
    11. Garbage Collection
    12. convert string to Title Case
    13. convert string to Pascal Case
    14. convert string to camelCase
    15. convert string to snake_case
    16. convert string from Pascal Case to snake_case
</details>


<details>
<summary>Data Structures Comparisons</summary>

1. **Array vs. Linked List:**
   - Array:
     - Elements are stored in contiguous memory locations.
     - Random access is efficient (O(1) time complexity).
     - Insertion and deletion at the beginning or middle are less efficient (O(n) time complexity).
   - Linked List:
     - Elements are stored non-contiguously, with each element containing a reference to the next element.
     - Random access is less efficient (O(n) time complexity).
     - Insertion and deletion at the beginning or middle are efficient (O(1) time complexity).

2. **Stack vs. Queue:**
   - Stack:
     - Follows Last In, First Out (LIFO) principle.
     - Operations: push (adds an element to the top) and pop (removes the top element).
     - Applications: function call stack, undo mechanisms.
   - Queue:
     - Follows First In, First Out (FIFO) principle.
     - Operations: enqueue (adds an element to the rear) and dequeue (removes the front element).
     - Applications: job scheduling, breadth-first search.

3. **Binary Tree vs. Binary Search Tree (BST):**
   - Binary Tree:
     - Each node has at most two children.
     - No specific order is maintained among the elements.
   - Binary Search Tree (BST):
     - Each node has at most two children.
     - Left child node is smaller, and the right child node is larger than the parent node.
     - Allows for efficient searching (O(log n) time complexity).

4. **Graph vs. Tree:**
   - Graph:
     - Consists of vertices/nodes connected by edges.
     - May contain cycles.
     - Can be directed or undirected.
   - Tree:
     - Special type of graph with no cycles.
     - Consists of nodes connected by edges.
     - Has a single root node and each node has exactly one parent, except the root.

5. **Hash Table vs. Array:**
   - Hash Table:
     - Data structure that maps keys to values.
     - Provides constant-time (O(1)) average case lookup, insertion, and deletion.
     - Uses a hash function to determine the index of each element.
   - Array:
     - Ordered collection of elements stored in contiguous memory locations.
     - Provides constant-time (O(1)) random access but linear-time (O(n)) lookup for unsorted arrays.


</details>

<details>
<summary>Pro's and Con's of each Data Structures</summary>


1. **Array:**
   - Pros:
     - Efficient random access (O(1) time complexity).
     - Simple and easy to use.
     - Fixed size or dynamic resizing (in dynamic arrays).
   - Cons:
     - Costly insertion and deletion in the middle (O(n) time complexity).
     - Fixed size in static arrays.
     - Contiguous memory allocation may lead to memory fragmentation.

2. **Linked List:**
   - Pros:
     - Efficient insertion and deletion at the beginning or middle (O(1) time complexity).
     - Dynamic size (no need for resizing).
     - No wasted memory due to fragmentation.
   - Cons:
     - Inefficient random access (O(n) time complexity).
     - Additional memory overhead for storing references.
     - More complex implementation compared to arrays.

3. **Stack:**
   - Pros:
     - Simple and intuitive Last In, First Out (LIFO) structure.
     - Efficient for managing function calls, undo mechanisms, and backtracking.
     - Constant-time push and pop operations (O(1) time complexity).
   - Cons:
     - Limited functionality (e.g., no random access).
     - May lead to stack overflow if the maximum stack size is exceeded.
     - Not suitable for scenarios requiring multiple access points.

4. **Queue:**
   - Pros:
     - Follows First In, First Out (FIFO) principle, suitable for job scheduling and breadth-first search.
     - Efficient enqueue and dequeue operations (O(1) time complexity).
     - Can be implemented using arrays or linked lists.
   - Cons:
     - Limited functionality (e.g., no random access).
     - May require resizing in dynamic arrays.

5. **Binary Tree:**
   - Pros:
     - Efficient for hierarchical data representation.
     - Supports efficient searching, insertion, and deletion (O(log n) time complexity for balanced trees).
     - Can be used for binary search and sorted traversal.
   - Cons:
     - May become unbalanced, leading to degradation in performance (O(n) time complexity for unbalanced trees).
     - Requires additional space for storing references to child nodes.

6. **Hash Table:**
   - Pros:
     - Provides constant-time average-case lookup, insertion, and deletion (O(1) time complexity).
     - Efficient for storing key-value pairs and implementing sets and dictionaries.
     - Supports dynamic resizing for efficient memory usage.
   - Cons:
     - Worst-case time complexity for operations may degrade to O(n) if collisions occur frequently.
     - Requires a good hash function for uniform distribution of keys.

</details>


<details>
<summary>Big Oh of each Data Structure Operations</summary>


1. **Array:**
   - Access (Random): O(1)
   - Search (Unsorted): O(n)
   - Search (Sorted): O(log n)
   - Insertion (End): O(1) (amortized)
   - Insertion (Middle): O(n)
   - Deletion (End): O(1)
   - Deletion (Middle): O(n)

2. **Linked List:**
   - Access (Random): O(n)
   - Search: O(n)
   - Insertion (Beginning): O(1)
   - Insertion (End): O(1) (with tail pointer)
   - Insertion (Middle, after traversal): O(n)
   - Deletion (Beginning): O(1)
   - Deletion (End): O(1) (with tail pointer)
   - Deletion (Middle, after traversal): O(n)

3. **Stack:**
   - Push (Insertion): O(1)
   - Pop (Deletion): O(1)
   - Peek (Access top element): O(1)

4. **Queue:**
   - Enqueue (Insertion): O(1)
   - Dequeue (Deletion): O(1)
   - Peek (Access front element): O(1)

5. **Binary Tree:**
   - Search (Average, Balanced): O(log n)
   - Search (Worst-case, Unbalanced): O(n)
   - Insertion (Average, Balanced): O(log n)
   - Insertion (Worst-case, Unbalanced): O(n)
   - Deletion (Average, Balanced): O(log n)
   - Deletion (Worst-case, Unbalanced): O(n)

6. **Hash Table:**
   - Search: O(1) (average case, assuming uniform hashing)
   - Insertion: O(1) (average case, assuming uniform hashing)
   - Deletion: O(1) (average case, assuming uniform hashing)


</details>
<details>
<summary>Big Oh of each Searching Algorithm</summary>


1. **Linear Search:**
   - Average Case: O(n)
   - Worst Case: O(n)
   - Best Case: O(1) (if the target element is found at the beginning)

2. **Binary Search:**
   - Average Case: O(log n)
   - Worst Case: O(log n)
   - Best Case: O(1) (if the target element is found at the middle)

3. **Depth-First Search (DFS) in Graphs:**
   - Time Complexity: O(V + E)
     - V: Number of vertices
     - E: Number of edges
   - Space Complexity: O(V) (for maintaining the stack or recursion depth)

4. **Breadth-First Search (BFS) in Graphs:**
   - Time Complexity: O(V + E)
   - Space Complexity: O(V) (for maintaining the queue)

5. **Interpolation Search:**
   - Average Case: O(log log n)
   - Worst Case: O(n) (for uniformly distributed or sorted arrays)

6. **Exponential Search:**
   - Time Complexity: O(log n)
   - Space Complexity: O(1)

7. **Jump Search:**
   - Time Complexity: O(√n)
   - Space Complexity: O(1)

8. **Fibonacci Search:**
   - Time Complexity: O(log n)
   - Space Complexity: O(1)

9. **Ternary Search:**
   - Time Complexity: O(log3 n)
   - Space Complexity: O(1)

10. **Hash Table Search:**
    - Average Case: O(1)
    - Worst Case: O(n) (due to collisions)


</details>
<details>
<summary>Big Oh of each Sorting Algorithm</summary>


1. **Bubble Sort:**
   - Best Case: O(n)
   - Average Case: O(n^2)
   - Worst Case: O(n^2)

2. **Selection Sort:**
   - Best Case: O(n^2)
   - Average Case: O(n^2)
   - Worst Case: O(n^2)

3. **Insertion Sort:**
   - Best Case: O(n)
   - Average Case: O(n^2)
   - Worst Case: O(n^2)

4. **Merge Sort:**
   - Best Case: O(n log n)
   - Average Case: O(n log n)
   - Worst Case: O(n log n)

5. **Quick Sort:**
   - Best Case: O(n log n)
   - Average Case: O(n log n)
   - Worst Case: O(n^2) (rare, but can occur if the pivot is not well-chosen)

6. **Heap Sort:**
   - Best Case: O(n log n)
   - Average Case: O(n log n)
   - Worst Case: O(n log n)

7. **Counting Sort:**
   - Best Case: O(n + k)
     - n: Number of elements in the input array
     - k: Range of input (maximum - minimum + 1)
   - Average Case: O(n + k)
   - Worst Case: O(n + k)

8. **Radix Sort:**
   - Best Case: O(nk)
     - n: Number of elements in the input array
     - k: Number of passes (number of digits in the maximum number)
   - Average Case: O(nk)
   - Worst Case: O(nk)

9. **Bucket Sort:**
   - Best Case: O(n + k)
     - n: Number of elements in the input array
     - k: Number of buckets
   - Average Case: O(n + k)
   - Worst Case: O(n^2) (if elements are unevenly distributed among buckets)


</details>

---


### Week 1

#### Algorithms
- **Search**
  - Binary Search (recursive also)
  - Linear Search
- **Recursion**
  - Iterative & recursive
- **Virtual Memory**
  - Amortised Residing
- **Dynamic Programming**
  - Memoize Approach
  - Bottom Up Approach
- **Problems**
  - Factorial, Fibonacci, Prime Number (with and without recursion)

#### Complexity Analysis
- **Time Complexity**
- **Space Complexity**
- **Asymptotic Notations**
  - Big O Notation
  - Omega Notation
  - Theta Notation

#### Memory
- **Memory Allocation**
  - Bit vs Byte
  - Memory Address
  - Contiguous Memory Allocation
  - Non-contiguous Memory Allocation
- **Stack**
  - Primitive Types Are Stored in Stack
- **Heap**
  - Reference Type Are Stored in Heap
    - Eg: Arrays, Functions, Objects
- **Memory Leak**
  - Symptoms
  - Garbage Collections
  - Process
  - Reasons for Memory Leak
  - How to Debug

#### Big O Notation
- Linear Time Complexity
- Constant Time Complexity
- Quadratic Time Complexity
- Cubic Time Complexity
- Logarithmic Complexity
- Exponential Complexity

#### Operations in Normal Array
- Init
- Set
- Get
- Traverse
- Insert
- Delete

#### Data Structures
- What is DS?
- Advantages and Disadvantages
- Examples
  - DOM
  - Undo & Redo
  - OS Job Scheduling
  - Dynamic Array
    - It’s Working and Memory Allocation
  - Set
  - Linked List
    - Advantages and Disadvantages
    - Applications
    - Creating a Linked List
    - Operation
      - Init
      - Set
      - Get
      - Traverse
      - Insert
      - Delete
    - Singly Linked List
    - Double Linked List
    - Circular Linked List
    - Array vs Linked List

#### Others
- Built-in DS in JS
  - Array
    - Push, Pop, Shift, Unshift, ForEach, Map, Filter, Reduce, Concat, Slice, Splice, Sort()
    - Some(), Every(), Find(), FindIndex(), Fill(), Flat(), Reverse(), Sort()
  - Objects
    - Insert, Remove, Access, Search
    - Object.keys(), Object.values(), Object.entries()
  - Sets
    - Add, Has, Delete, Size, Clear
  - Maps
    - Set, Get, Has, Delete, Size, Clear
  - Array vs Set
  - Object vs Map
  - Strings
    - Primitive and Object String
    - Escape Char
    - ASCII
      - 32 - Space
      - 48-57 == (0-9)
      - 65-90 == (A-Z)
      - 97-122 == (a-z)
    - Unicode
    - UTF-8

#### Custom DS
- Stacks
- Queue
- Circular Queues
- Linked Lists
- Hash Tables
- Trees
- Graphs
- Trees
  - Binary Tree
  - Complete Binary Tree
  - Full Binary Tree
  - Perfect Binary Tree
  - Heap
    - Features
    - Min Heap
      - Creating Heap
      - Insert
      - Delete
    - Max Heap

### Week 2

#### Algorithms
- **Sorting**
  - Bubble Sort
  - Insertion Sort
  - Quick Sort
    - Divide and Conquer
    - Partition Method
    - Pivot Selection
      - Last, First
      - Average/Median
  - Heap Sort
  - Merge Sort
    - Divide and Conquer
    - Merge vs Quick Sort

#### Data Structures
- **Stacks**
  - LIFO
  - Push, Pop
  - Stack Underflow
  - Stack Overflow
  - Use Cases
  - Types of Stack
    - Linear Stack
    - Dynamic Stack
    - Array-Based
    - Linked List Based
- **Queue**
  - FIFO
  - Enqueue
  - Dequeue
  - Peek
  - Priority Queue
  - Circular Queue
  - Uses
  - Types of Queue
    - Linear Queue
    - Circular Queue
    - Priority Queue
    - Dequeue (Double Ended Queue)
      - Input Restricted
      - Output Restricted
    - Blocking Queue
    - Concurrent Queue
    - Delay Queue
- **Hash Table**
  - Searching O(1)
  - Hash Function
  - Collision
  - Dynamic Restructuring
  - Uses
  - Load Factor
  - Operations
    - Init
    - Insert
    - Search
    - Delete
    - Traverse
- **Please Note**
  - Week Set, Week Map
  - Collisions Handling
    - Separate Chaining
    - Open Addressing
      - Linear Probing
      - Quadratic Probing
      - Double Hashing
    - Clustering
      - Cuckoo Hashing
      - Robin Hood Hashing
  - SHA: Secure Hashing Algorithm

### Week 3

#### Linear, Non-linear, Hierarchical Data Structures

#### Tree
- Features
- Uses
- Parent, Child, Root, Leaf, Sibling, Ancestor, Descendant, Path, Distance, Degree, Depth, Height, Edge, Subtree
- Types of Trees on Nodes
  - Binary Tree
  - Ternary Tree
  - K-array Tree
  - Threaded Binary Tree
- Types of Trees on Structure
  - Complete Tree
  - Full Tree
  - Perfect Tree
  - Degenerate
    - Left-Skew
    - Right-Skew
- Binary Search Tree (BST)
  - BST vs BT
  - Uses
  - Balanced vs Unbalanced Tree
  - Properties of BST
  - Operations
    - Inserting
    - Deletion
    - Traversal
      - DFS
        - InOrder
        - PreOrder
        - PostOrder
      - BFS
- Balanced Search Tree
  - AVL Tree
  - Red-Black Tree
  - Prefix Tree
  - M-way Search Tree
    - B Tree
    - B+ Tree
  - Merkle Tree
  - Red-Black Tree vs AVL
- Heap
  - Min Heap
    - To Get Value Of
      - Left Child
      - Right Child
      - Parent
    - Operations
      - Init/Heapify
      - Insert
      - Delete
  - Max Heap
    - Heapify
      - Bottom-Up
      - Top-Down
  - DEPQ
- Trie
  - String vs Trie
  - Operations
    - Init
    - Insertion
    - Delete
    - Search
  - Prefix and Suffix Tree
    - Terminator Char
  - Compressed Trie
    - Radix Tree (Patricia Trie)

#### Graph
- Vertex, Edge
  - Adjacency List, Matrix
- Types
  - Unidirectional (Directed Graph)
  - Bidirectional (Undirected Graph)
  - Cyclic
  - Disconnected
  - Weighted Graph
  - Unweighted Graph
  - Bipartite Graph
- Traversal
  - BFS
  - DFS
- River Size Problem

#### Algorithms
- Greedy Method
- Kruskal's Algorithm
- Prim's Algorithm
- Dijkstra's Algorithm
- Bellman-Ford Algorithm
- Topological Sorting
- Floyd-Warshall Algorithm
- Bipartite Graph Checking
- Max Flow (Ford-Fulkerson Algorithm)

#### Question
- Graph vs Tree
- Forest (in Tree)
  - Forest > Graph > Tree > Linked List
- Operators
  - Binary Operators
  - Priority
  - Infix
  - Prefix (Polish Notation)
  - Postfix (Reverse Polish Notation)
- General
  - How Does Logarithms Work
  - File Structure vs Data Structure
  - Where Is the DS Used?
  - Void vs Null
  - Dynamic Data Structure
    - Uses
    - Example
    - Dynamic Memory Management/Allocations
    - Heap Be Used Over a Stack
  - Data Abstraction
  - Post Fix Expression
  - Signed Number
  - Pointers in DS
    - Uses
  - Huffman’s Algorithm Working
  - What Is Recursive Algorithm
  - Divide and Conquer on Recursion
  - Which Is the Fastest Sorting Algorithm Available?
  - Multi Linked
  - Sparse Matrices
  - Disadvantages of Implementing Queues Using Arrays
  - Void Pointer
  - Lexical Analysis
  - Lexeme
  - Pattern
