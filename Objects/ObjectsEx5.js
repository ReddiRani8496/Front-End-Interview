const person = {
  name: "John",
  age: 30,
  sayHi: function () {
    name = "Rock";
    const hi = {
      msg: function () {
        console.log("Hello " + name);
      },
    };
    return hi.msg();
  },
};

person.sayHi();
// it will call function in hi key, the function is returning hi.msg(), so the method is called and
// prints Hello rock
