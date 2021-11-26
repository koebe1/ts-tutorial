// union type -> func(input: number | string)
// ---> assign multiple possible types to a parameter
function combine(input1, input2, resultType) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    //   if (resultType === "as-number") {
    //     // + infront of a variable converts it into a number
    //     // return parseFloat(result)
    //     return +result;
    //   } else {
    //     return result.toString();
    //   }
    return result;
}
var combinedNum = combine(30, 36, "as-number");
console.log(combinedNum);
var combinedTxt = combine("Bene", "K", "as-text");
console.log(combinedTxt);
var combinedStr = combine("30", "36", "as-number");
console.log(combinedStr);
