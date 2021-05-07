const double = (x) => x * 2;
const subtractOne = (x) => x - 1;
const triple = (x) => x * 3;
const add5 = (x) => x + 5;

const functionArray = [double, subtractOne, triple, add5, Math.sqrt];

let number = 42;

const applyMathFunctions = (number) => {
  functionArray.forEach((fun) => {
    number = fun(number);
  });
  return number;
};

const result = applyMathFunctions(number);

console.log(result);
// console.log("original number -> ", number);
