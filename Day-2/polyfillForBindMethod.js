let name = {
  firstName: "reddi",
  lastName: "rani",
};

let printFullName = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      hometown +
      " , " +
      state +
      " " +
      country
  );
};

let namePrint = printFullName.bind(name, "Tirupati", "Andhra Pradesh", "India");
namePrint();

// now requirement is to create our own bind method let name it as mybind

Function.prototype.mybind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printName = printFullName.mybind(name, "Tirupati", "AndhraPradesh");
printName("India");
