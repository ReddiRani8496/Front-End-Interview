let name = {
  firstName: "reddi",
  lastName: "rani",
  //   printFullName: function () {
  //     console.log(this.firstName + " " + this.lastName);
  //   },
};

// we can declare printfullname function seperately

let printFullName = function () {
  console.log(this.firstName + " " + this.lastName);
};

printFullName.call(name);

let name2 = {
  firstName: "aruna",
  lastName: "kumari",
};

// borrowing function
// name.printFullName.call(name2);

printFullName.call(name2);
