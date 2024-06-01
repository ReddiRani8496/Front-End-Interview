// parse method is used to convert the string into json format

// stringfy method is used to convert the json to string

let person = {
  name: "John",
  age: 30,
};

let stringPerson = JSON.stringify(person);
console.log(stringPerson);
let jsonFormat = JSON.parse(stringPerson);
console.log(jsonFormat);
