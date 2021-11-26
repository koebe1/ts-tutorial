// define return type -> func(arg: type): returnType {}
// ---> define the type you want to return from the function
function add(n1, n2) {
    return n1 + n2;
}
// void type -> func(arg: type): void {}
// ---> no return value
// ---> gets assigned automatically with when only using side effects
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 12));
// undefined type
// ---> no value is returned but return keyword is used
function returnNothing() {
    return;
}
var someValue;
// function type -> let variable: (a1: type, a2: type) => returnType
// ---> allow to describe which function is used specifically
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
// callback
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (num) { return console.log(num); });
