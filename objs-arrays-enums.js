"use strict";
// // const person: {
// //   name: string;
// //   age: number;
// //   hobbies: string[];
// //   // tuple
// //   role: [number, string];
// // } = {
// //   name: "bene",
// //   age: 27,
// //   hobbies: ["sports", "cooking"],
// //   role: [2, "author"],
// // };
// // const ADMIN = 0;
// // const READ_ONLY = 1;
// // const AUTHOR = 2;
// enum Role {
//   ADMIN = 10,
//   // read_only gets assigned the value 11 automatically
//   READ_ONLY,
//   // strings are also possible
//   AUTHOR = "AUTHOR",
// }
// let person = {
//   name: "bene",
//   age: 27,
//   hobbies: ["sports", "cooking"],
//   role: Role.ADMIN,
// };
// // any takes away all advantages ts gives you
// let fav: any[];
// fav = ["Sports", 1, {}, []];
// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }
// if (person.role === Role.ADMIN) {
//   console.log("is author");
// }
