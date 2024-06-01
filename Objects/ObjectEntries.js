let person = {
  name: "John",
  age: 21,
};

for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}
