const obj = {
  a: 10,
  x: function () {
    // x is called method
    console.log(this);
  },
};

obj.x(); // prints the object
