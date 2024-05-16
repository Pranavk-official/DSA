/**
 * [Problem 20 - Valid Paranthesis]
 * 
 * Valid Paranthesis
 *
 * Given a string s containing just the characters
 * '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 *      1. Open brackets must be closed by the same type of brackets.
 *      2. Open brackets must be closed in the correct order.
 *      3. Every close bracket has a corresponding open bracket of the same type.
 */

const isValidParanthesis = (s) => {
  let stack = [];
  let closeToOpen = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    // console.log(s[i]);
    if (s[i] in closeToOpen) {
      if (stack && stack[stack.length - 1] == closeToOpen[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0 ? true : false;
};

// console.log(isValidParanthesis("()"));
// console.log(isValidParanthesis("()}"));
// console.log(isValidParanthesis("{()}"));
// console.log(isValidParanthesis("(){}[]"));
// console.log(isValidParanthesis("(]"));

/**
 * [Problem 155 - Min Stack]
 *
 * Design a stack that supports push, pop, top,
 * and retrieving the minimum element in constant time.
 *
 * Implement the MinStack class:
 *
 * 1. MinStack() initializes the stack object.
 * 2. void push(int val) pushes the element val onto the stack.
 * 3. void pop() removes the element on the top of the stack.
 * 4. int top() gets the top element of the stack.
 * 5. int getMin() retrieves the minimum element in the stack.
 *
 * > You must implement a solution with O(1) time complexity for each function.
 *
 */

var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (this.minStack.length !== 0) {
    val = Math.min(val, this.minStack[this.minStack.length - 1]);
  }
  this.minStack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/**
 * [Problem 150 - Evaluate Reverse Polish Notation]
 *
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 *
 * Valid operators are +, -, *, /. Each operand may be an integer or another expression.
 *
 * Input: tokens = ["2","1","+","3","*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
 *
 * Input: tokens = ["4","13","5","/","+"]
 * Output: 6
 * Explanation: (4 + (13 / 5)) = 6
 *
 */

const evaluateExpression = (tokens) => {
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "+") {
      stack.push(parseInt(stack.pop()) + parseInt(stack.pop()));
    } else if (tokens[i] === "-") {
      let a = parseInt(stack.pop()),
      b = parseInt(stack.pop());
      stack.push(b - a);
    } else if (tokens[i] === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (tokens[i] === "/") {
      let a = parseInt(stack.pop()),
      b = parseInt(stack.pop());
      stack.push(parseInt(b / a));
    } else {
      stack.push(tokens[i]);
    }

  }
  return stack[0]
};

// const tokens = ["2", "1", "+", "3", "*"];
// console.log(evaluateExpression(tokens));

/**
 * [Problem 225 - Implement Stack using Queues]
 * 
 * Implement a last in first out (LIFO) stack using only two queues.
 * 
 * The implemented stack should support all the functions of a normal stack
 * (push, top, pop, and empty).
 * 
 * Implement the MyStack class:
 * 
 * 1. void push(int x) Pushes element x to the top of the stack.
 * 2. int pop() Removes the element on the top of the stack and returns it.
 * 3. int top() Returns the element on the top of the stack.
 * 4. boolean empty() Returns true if the stack is empty, false otherwise.
 * 
 * Notes:
 * 
 * You must use only standard operations of a queue, which means only push to
 * back, peek/pop from front, size, and is empty operations are valid.
 * Depending on your language, the queue may not be supported natively. You may
 * simulate a queue using a list or deque (double-ended queue) as long as you
 * use only a queue's standard operations.
 */


