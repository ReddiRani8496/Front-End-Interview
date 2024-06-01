function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getName = function () {
  // prototype is used to add the method to Person constructor
  console.log(this.name);
};

let p1 = new Person("John", 20);
console.log(p1);
p1.getName();

let p2 = new Person("Mock", 30);
console.log(p2);
p2.getName();
