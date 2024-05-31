let name = {
  id: "10",
  printName: function (district, state) {
    console.log(
      this.firstName +
        " " +
        this.lastName +
        " lives in " +
        district +
        " in " +
        state
    );
  },
};

let student1 = {
  firstName: "aruna",
  lastName: "kumari",
};

name.printName.call(student1, "Kadapa", "Andhra"); // we will pass as individual arguments

let student2 = {
  firstName: "rupa",
  lastName: "sugar",
};
name.printName.apply(student2, ["Kurnool", "Andhra"]); // we will pass as array of arguments
