// unknown type -> don't know yet which type im going to use
// ---> better choice over any because forces a type check
// ---> at runtime when reassigning

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}

// never type -> never returns a value 

function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code,
  };
}

generateError("An error occured", 500);

