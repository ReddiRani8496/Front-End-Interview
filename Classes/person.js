class Person {
  constructor(name, age) {
    // constructor
    this.name = name;
    this.age = age;
  }

  displayDetails() {
    // function
    console.log(`name ${this.name}, age ${this.age}`);
  }
}

let p1 = new Person("John", 20);
p1.displayDetails();
