const person = {
  name: "John",
  age: 30,
};

console.log(person.name);
// or we can access person object values same as array elements
console.log(person["name"]);
console.log(person["age"]);
console.log(person.age);

console.log(person);

// adding new key and value to person object
person.gender = "male";
console.log(person);
console.log(person.gender);
