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

// let developerSalaries = 0;
// let nonDeveloperSalaries = 0;

// let developers = 0;
// let nonDevelopers = 0;

// employees.forEach((employee) => {
//   isDeveloper(employee)
//     ? sumDeveloperSalaries(employee)
//     : sumNonDeveloperSalaries(employee);
// });

// function isDeveloper(employee) {
//   return employee.jobTitle === "developer";
// }
// function sumDeveloperSalaries(employee) {
//   developerSalaries += employee.salary;
//   developers++;
// }
// function sumNonDeveloperSalaries(employee) {
//   nonDeveloperSalaries += employee.salary;
//   nonDevelopers++;
// }

// console.log(developerSalaries / developers);
// console.log(nonDeveloperSalaries / nonDevelopers);

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
