# DSA - JavaScript


This is a JavaScript based implementation of all the Data Structures and Algorithms.

<details>
<summary> Basic Theory Questions To Revise.</summary>

Sure, let's briefly discuss each of these topics:

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



- chunk array into sub-arrays of n elements (problem 1d to 2d)
- Unicode
- ASCII
- escape sequences
- \0
- control charecters 
- LF
- cyclic reference
- Weak Ref
- virtual memory
- Garbage Collection
- convert string to Title Case
- convert string to Pascal Case
- convert string to camelCase
- convert string to snake_case
- convert string from Pascal Case to snake_case