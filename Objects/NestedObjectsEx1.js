let person = {
  name: {
    firstName: "John",
    lastName: "Doe",
  },
  age: 30,
};
console.log(person["name"]["firstName"]);
console.log(person["name"]["lastName"]);
console.log(person.name["fixedName"]);
console.log(person.name["lastName"]);
console.log(person["name"].firstName);
console.log(person["name"].lastName);
console.log(person.name.firstName);
console.log(person.name.lastName);
