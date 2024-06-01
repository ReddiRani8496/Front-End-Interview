// object keys as expression

const person = {
  first: "John",
  last: "Doe",
  firstlast: "john" + " " + "Doe",
};

console.log(person["first" + "last"]); // first inside the braces is concatenated as firstlast, then it will check for the firstlast key in person object.
