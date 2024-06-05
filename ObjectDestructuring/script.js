const person = {
  name: "John",
  age: 30,
  isMajor: true,
  isRunning: false,
};

// access first two keys
// let { name, age } = person;
// console.log(name);
// console.log(age);

// skipping 2nd key
// let { name, isMajor, isRunning } = person;
// console.log(name);
// console.log(isMajor);
// console.log(isRunning);

// using rest operator
// let { name, ...rest } = person;
// console.log(name);
// console.log(rest);
// console.log(rest.isMajor);
// console.log(rest.isRunning);

// using variable names different from key names
let { name: myName, age: myAge } = person;
console.log(myName);
console.log(myAge);
