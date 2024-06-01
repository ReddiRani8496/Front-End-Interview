let age = 50;

const person = {
  name: "John",
  age: 30,
  getName: function () {
    //console.log(name); // it will throw an error, because when we don't use this, it will check for global var, outside the object, but name is not there

    console.log(this.name); // now it will point to the person object name

    console.log(age); // it will pint to global var, outside the object and prints 50
  },
};

person.getName();
