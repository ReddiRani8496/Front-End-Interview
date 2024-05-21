function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  return y;
}

var z = x();
console.log(z); // prints whole function
z(); // due to lexical environment, the inner function i.e., y is binded with outer function variable a
// even when we access y(), it contains the code inside of y and code of x. so it will print 10;
