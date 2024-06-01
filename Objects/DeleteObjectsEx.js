// delete the person key using delete keyword

const person = {
  name: "John",
  age: 30,
};

console.log(person);

delete person.age;
console.log(person);

// if we try to access the key which is not there in object, it won't throw an error, just it will show undefined.

console.log(person.age);
