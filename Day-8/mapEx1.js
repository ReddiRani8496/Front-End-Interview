let users = [
  { firstName: "John", lastName: "king", age: 26 },
  { firstName: "david", lastName: "son", age: 75 },
  { firstName: "donald", lastName: "trump", age: 50 },
  { firstName: "elon", lastName: "musk", age: 26 },
];
const output = users.map((name) => name.firstName + " " + name.lastName);
console.log(output);
