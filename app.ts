// union type -> func(input: number | string) 
// ---> assign multiple possible types to a parameter

function combine(input1: number | string, input2: number | string, resultType: string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedNum = combine(30, 36, "as-number");
console.log(combinedNum);

const combinedStr = combine("30", "36", "as-text");
console.log(combinedStr);
