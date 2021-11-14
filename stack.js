class Stack {
  constructor() {
    this.items = [];
    this.count = 2;
  }

  push(element) {
    this.items[this.count] = element
    this.count++
  }

  pop() {
    if(this.isEmpty()) {
      return undefined
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count]
    console.log(result)
    return result;
  }

  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length
  }

  clear() {
    this.items = [];
  }
}


const stack = new Stack();

console.log(stack);
console.log(stack.isEmpty()); //exibe true
stack.push(5);
stack.push(8);
console.log(stack)
console.log(stack.size())
console.log(stack.items)
stack.pop()
console.log(stack)
