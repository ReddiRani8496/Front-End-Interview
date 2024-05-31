let name = {
  id: "10",
  printName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

let student1 = {
  firstName: "aruna",
  lastName: "kumari",
};

name.printName.call(student1);

let student2 = {
  firstName: "rupa",
  lastName: "sugar",
};
name.printName.call(student2);
