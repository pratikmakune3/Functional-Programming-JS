const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

const combine2and3 = (func) => func(2, 3);

/* This is same as the function shorthand syntax */
// const combine2and3 = (func) => {
//   return func(2, 3);
// };

const addResult = combine2and3(subtract);
console.log(addResult);
