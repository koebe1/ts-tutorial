// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   // tuple
//   role: [number, string];
// } = {
//   name: "bene",
//   age: 27,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    // read_only gets assigned the value 11 automatically
    Role[Role["READ_ONLY"] = 11] = "READ_ONLY";
    // strings are also possible
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "bene",
    age: 27,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN
};
// any takes away all advantages ts gives you
var fav;
fav = ["Sports", 1, {}, []];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log("is author");
}
