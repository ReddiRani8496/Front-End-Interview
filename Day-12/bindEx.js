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

let res = name.printName.bind(student1); // it wont print any data, because bind will return the function

res();
