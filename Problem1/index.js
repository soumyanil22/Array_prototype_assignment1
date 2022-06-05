//Stack

// class Stack {
//   constructor() {
//     this.length = 0;
//     this.stack = [];
//   }

//   push(el) {
//     this.stack[this.length] = el;
//     this.length++;
//   }

//   pop() {
//     this.stack.pop();
//     this.length--;
//   }

//   peek() {
//     return this.stack[this.length - 1];
//   }
// }

// let s1 = new Stack();

class Arr {
  contructor() {
    this.length = 0;
    this.array = [];
  }
}

Arr.prototype.push = function (el) {
  this.array[this.length] = el;
  this.length++;
};

Arr.prototype.pop = function () {
  this.array.pop();
  this.length--;
};

Arr.prototype.top = () => {
  if (this.array === undefined) {
    return undefined;
  } else {
    return this.array[this.length - 1];
  }
};

Arr.prototype.print = () => {
  console.log(this.array);
};

Arr.prototype.printReverse = () => {
  let ans = [];
  for (let i = this.array.length - 1; i >= 0; i--) {
    ans.push(this.array[i]);
  }
  return ans;
};

Arr.prototype.size = () => {
  return this.length;
};

let arr = new Arr();

console.log(arr.printReverse());
