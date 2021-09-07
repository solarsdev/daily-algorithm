class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }

  push(item) {
    this.arr[this.index++] = item;
  }

  pop() {
    return this.empty() === 1 ? -1 : this.arr[this.index-- - 1];
  }

  size() {
    return this.index;
  }

  empty() {
    return this.index === 0 ? 1 : 0;
  }

  top() {
    return this.empty() === 1 ? -1 : this.arr[this.index - 1];
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const stack = new Stack();
let result = '';

for (let i = 1; i < input.length; i++) {
  let [operation, number] = input[i].split(' ');
  switch (operation) {
    case 'push':
      stack.push(parseInt(number));
      break;
    case 'pop':
      result += stack.pop() + '\n';
      break;
    case 'size':
      result += stack.size() + '\n';
      break;
    case 'empty':
      result += stack.empty() + '\n';
      break;
    case 'top':
      result += stack.top() + '\n';
      break;
  }
}

console.log(result.trim());
