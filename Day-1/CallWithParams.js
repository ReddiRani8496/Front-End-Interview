let name = {
  firstName: "reddi",
  lastName: "rani",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " , " + state
  );
};

printFullName.call(name, "Tirupati", "Andhra Pradesh");

let name2 = {
  firstName: "aruna",
  lastName: "kumari",
};

printFullName.call(name2, "Banglore", "karnataka");
