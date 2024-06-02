/*
A class must contain only one constructor. constructor overloading is not allowed
*/

class Person {
  constructor(name, age) {
    // constructor
    this.name = name;
    this.age = age;
  }

  //constructor() {} // it will throw an error

  displayDetails() {
    // function
    console.log(`name ${this.name}, age ${this.age}`);
  }
}

let p1 = new Person("John", 20);
p1.displayDetails();

let p2 = new Person(); // it will call the parameterised constructor, but the values will be undefined
p2.displayDetails(); // prints both name and age as undefined
