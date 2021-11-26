// unknown type -> don't know yet which type im going to use
// ---> better choice over any because forces a type check
// ---> at runtime when reassigning
var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
// never type ->
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
generateError("An error occured", 500);
