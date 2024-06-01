// objects are mutable, if we change the value of key using one reference, it will effect to original object

const person = {
  name: "John",
  age: 30,
};
console.log(person.age);
let x = person;
x.age = 40;
console.log(x.age);
console.log(person);

let y = person;
console.log(person.age); // prints 40, because it is updated using x reference
