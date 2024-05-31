let name = {
  id: "1",
  printData: function () {
    console.log(this); // prints the enclosing lexical environment of function i.e. name object
    let val = () => {
      console.log(this); // prints the enclosing lexical environment of function i.e. printData()
    };
    val();
  },
};

name.printData();
