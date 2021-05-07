// // 2.2
// const DEVELOPMENT = true;

const fetchDataReal = () => {
  // Time intensive task
};

const fetchDataFake = () => ({
  name: "Pratik Makune",
  age: 28,
});

const fetchData = DEVELOPMENT ? fetchDataFake() : fetchDataReal;

// // 2.3
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
console.log("original number -> ", number);

// 2.4 Passing functions as params
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

const combine2and3 = (func) => func(2, 3);

// /* This is same as the function shorthand syntax */
// // const combine2and3 = (func) => {
// //   return func(2, 3);
// // };

const addResult = combine2and3(add);
const subtractResult = combine2and3(subtract);
const minResult = combine2and3(Math.min);
console.log(addResult); // => 2 + 3
console.log(subtractResult); // => 2 - 3
console.log(minResult);

// // Passing anonymous function as a param -> Sometimes the functionality is v. specific and might not be used anywhere else!
const multResult = combine2and3((x, y) => x * y);
console.log(multResult);

//2.5 -> Returning functions
const createPrinter = () => () => console.log("Hello");

createPrinter()();

const double = (x) => x * 2;
const triple = (x) => x * 3;
const quadruple = (x) => x * 4;

const createMultiplier = (multFactor) => (number) => multFactor * number;

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(quadruple(5));

// 2.6 Closure
/* 
  Notes - when a function1 returns function2, 
  funtion2(returned function) still has access to the variables declared inside function1 scope
  even though function1 has finished it's execution

  If closure wasn't existed, returning a function would be useless in most of the cases!
*/

// 2.7 Implement private vars, getters, setters using Closure
const Person = ({ name, age, job }) => {
  let _name = name;
  let _age = age;
  let _job = job;

  // Closure -> return a sinlge function or object of methods
  // -> Closure is used to make variables accessable to outside world via getter/setter
  return {
    getJob: () => _job,
    setJob: (newJob) => (_job = newJob),
  };
};

const me = Person({ name: "Pratik", age: 28, job: "developer" });

console.log(me.getJob());
me.setJob("senior developer");
console.log(me.getJob());

// 3.2 Spread operator
const person = {
  name: "Pratik",
  age: 28,
};

const careerData = {
  job: "developer",
  experience: "5 years",
};

const updates = {
  name: "Trapik",
};

const updatedPerson = {
  ...person,
  ...updates,
};

console.log(updatedPerson);

const nums = [1, 2, 3, 4];
const newNums = [0, ...nums, 5, 6];

console.log(newNums);

// 3.3 Map

const numbers = [1, 2, 3, 4, 5];

// // create a function that needs to be applied on each elem of array, here double!
const double = (x) => x * 2;

const doubledNumbers = numbers.map(double);

console.log(doubledNumbers);

// 3.4 Filter
const numbers = [1, 2, 3, 4, 5, 6];

const isEven = (x) => x % 2 === 0;

const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);

const words = ["hello", "pratik", "hi", "antartica"];

const isLongerThan = (len) => (word) => word.length > len;

const isLongerThan5 = isLongerThan(5);

const longerWords = words.filter(isLongerThan5);

console.log(longerWords);

// 3.5 Every/Some

const numbers = [1, 2, 3, 4, 5];

const isNumber = (number) => !isNaN(number);

const isNumberArray = numbers.every(isNumber);

console.log(isNumberArray);

const employees = [
  { name: "abc", salary: 60000 },
  { name: "pqr", salary: 90000 },
  { name: "lmn", salary: 1100000 },
  { name: "xyz", salary: 30000 },
];

const isMakesMoreThanOneMillion = (employee) => employee.salary > 1000000;

const result = employees.some(isMakesMoreThanOneMillion);

console.log(result);

const formValues = ["Pratik", "Makune", "Amsterdam", ""];

const isNonEmpty = (val) => val.length !== 0;

const allFieldsFilled = formValues.every(isNonEmpty);

console.log(allFieldsFilled);

// 3.6 Slicing

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const slicedSection = numbers.slice(3, 8); // starts at index 3 and ends just before index 8 // return [3,4,5,6,7] // Doesn't mutate original array

console.log(slicedSection);

console.log(numbers);

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reversed = numbers.slice().reverse();

console.log(reversed);
console.log(numbers);

// Using ... operator
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reversed = [...numbers].reverse();

console.log(reversed);
console.log(numbers);

// 3.7 - Sorting
const mixedNumbers = [10, 8, 1, 3, 2, 9, 5, 6, 4, 7];

const ascending = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const descending = (a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
};

const ascendingNumbers = mixedNumbers.slice().sort(ascending);
const descendingNumbers = mixedNumbers.slice().sort(descending);

console.log(ascendingNumbers);
console.log(descendingNumbers);

// 3.8 Reduce

const nums = [7, 1, 4, 2, 3, 6, 5];

const sum = nums.reduce((acc, x) => {
  return acc + x;
}, 0);

/* 
  Can also be written as -> const sum = nums.reduce((acc, x) => acc + x, 0); 
*/

const product = nums.reduce((acc, x) => {
  return acc * x;
}, 1);

console.log(sum);
console.log(product);

// 3.9 Combining functions

const employees = [
  {
    name: "John Olsen",
    age: 54,
    jobTitle: "developer",
    salary: 70000,
  },
  {
    name: "Karen Norris",
    age: 34,
    jobTitle: "engineer",
    salary: 75000,
  },
  {
    name: "Daryl Cline",
    age: 25,
    jobTitle: "secretary",
    salary: 54000,
  },
  {
    name: "Abbey Garcia",
    age: 40,
    jobTitle: "developer",
    salary: 100000,
  },
  {
    name: "Finn Smith",
    age: 29,
    jobTitle: "engineer",
    salary: 40000,
  },
  {
    name: "Eve Wordsworth",
    age: 20,
    jobTitle: "developer",
    salary: 65000,
  },
  {
    name: "Ronald Jacobs",
    age: 60,
    jobTitle: "developer",
    salary: 90000,
  },
];

// Using for-each
let developerSalaries = 0;
let nonDeveloperSalaries = 0;

let developers = 0;
let nonDevelopers = 0;

employees.forEach((employee) => {
  isDeveloper(employee)
    ? sumDeveloperSalaries(employee)
    : sumNonDeveloperSalaries(employee);
});

function isDeveloper(employee) {
  return employee.jobTitle === "developer";
}
function sumDeveloperSalaries(employee) {
  developerSalaries += employee.salary;
  developers++;
}
function sumNonDeveloperSalaries(employee) {
  nonDeveloperSalaries += employee.salary;
  nonDevelopers++;
}

console.log(developerSalaries / developers);
console.log(nonDeveloperSalaries / nonDevelopers);

// Using JS functions
const developers = employees.filter(
  (employee) => employee.jobTitle === "developer"
);

const nonDevelopers = employees.filter(
  (employee) => employee.jobTitle !== "developer"
);

const developerSalaries = developers.reduce((acc, developer) => {
  return acc + developer.salary;
}, 0);

const nonDeveloperSalaries = nonDevelopers.reduce((acc, nonDeveloper) => {
  return acc + nonDeveloper.salary;
}, 0);

const averageDeveloperSalary = developerSalaries / developers.length;
const averageNonDeveloperSalary = nonDeveloperSalaries / nonDevelopers.length;

console.log(averageDeveloperSalary);
console.log(averageNonDeveloperSalary);

// 3.10 - Challenge - Create your own map function
// 1st way ->
const map = (arr, func) => {
  let newArray = [];
  arr.forEach((element) => {
    const result = func(element);
    newArray.push(result);
  });

  return newArray;
};

// 2nd way ->
const map2 = (arr, func) => {
  return arr.reduce((acc, elem) => {
    const result = func(elem);
    acc.push(result);
    return acc;
  }, []);
};

// testing if it works:

// Should be [2, 4, 6]
console.log(map([1, 2, 3], (x) => x * 2));

// Should be [-5, -6, -7, -8, -9, -10]
console.log(map([5, 6, 7, 8, 9, 10], (x) => -x));

// Should be ['A', 'B', 'C', 'D']
console.log(map(["a", "b", "c", "d"], (x) => x.toUpperCase()));

// 4.02 -> Currying and Partial Addition

const add = (x, y, z) => x + y + z;

const addPartial = (x) => (y, z) => add(x, y, z);

const add5 = addPartial(5);

console.log(add5(6, 10));

// // add(5, 6, 10) == add5(6, 10)

const addPartial2 = (x, y) => (z) => add(x, y, z);

const add5and6 = addPartial2(5, 6);

console.log(add5and6(10));
