let name = {
  firstName: "reddi",
  lastName: "rani",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " , " + state
  );
};

let namePrint = printFullName.bind(name, "Tirupati", "Andhra Pradesh");
//console.log(namePrint); // it will return a function
namePrint(); // returns the ouput

let name2 = {
  firstName: "aruna",
  lastName: "kumari",
};

let name2Print = printFullName.bind(name2, "Banglore", "karnataka");
name2Print();
