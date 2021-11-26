// define return type -> func(arg: type): returnType {}
// ---> define the type you want to return from the function

function add(n1: number, n2: number): number {
  return n1 + n2;
}

// void type -> func(arg: type): void {}
// ---> no return value
// ---> gets assigned automatically with when only using side effects

function printResult(num: number): void {
  console.log("Result: " + num);
}
printResult(add(5, 12));

// undefined type
// ---> no value is returned but return keyword is used
function returnNothing(): undefined {
  return;
}
let someValue: undefined;

// function type -> let variable: (a1: type, a2: type) => returnType
// ---> allow to describe which function is used specifically
let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

// callbacks get also a function type to describe them
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (num) => console.log(num));

// unknown type -