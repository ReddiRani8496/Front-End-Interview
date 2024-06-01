let person = {
  name: "John",
  age: 21,
};

for (let values of Object.values(person)) {
  console.log(values);
}
