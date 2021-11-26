"use strict";
// // Why TypeScript?
// // ---> JS only error checking at runtime, not at development like TS
// // ---> catch bugs before runtime with TS
// /* 
// // CORE TYPES of TS
// available in JS:
//   number -> all numbers
//   string -> all text values
//   boolean -> true, false --> no truthy, falsy values 
//   object -> any JS object, more specific (type of object) are possible
//   array -> any JS array, type can be flexible or strict (regarding the element types)
//   not available in JS (added by TS): 
//   tuple -> fixed length and type array
//   enum -> enum{NEW, OLD} -> automatically enumerated global constant identifiers
//   any -> * -> any kind of value, no specific type assignment
// */
// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//   const result = n1 + n2;
//   if (showResult) {
//     console.log(phrase + result);
//     // or
//   } else {
//     return result;
//   }
// }
// const num1 = 5;
// const num2 = 2.8;
// const printResult = true;
// const resultPhrase = "Result is:";
// add(num1, num2, printResult, resultPhrase);
