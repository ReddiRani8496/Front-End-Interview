let name = {
  firstName: "reddi",
  lastName: "rani",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " , " + state
  );
};

printFullName.apply(name, ["Tirupati", "Andhra Pradesh"]);

let name2 = {
  firstName: "aruna",
  lastName: "kumari",
};

printFullName.apply(name2, ["Banglore", "karnataka"]);

// diff b/w call and apply is, in call we pass arguments as individual values,
// but in apply we pass arguments as array
