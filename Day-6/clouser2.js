function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  return inner;
}

outer()(); // calling inner function

// outer() returns the inner function, so one more () calls the returned function i.e., inner()

function outer() {
  function inner() {
    console.log(a);
  }
  var a = 10;
  return inner;
}

outer()(); // still the above function forms a clouser, it doesn't matter where the variable declared
// in outer method, the inner function access all the variables of outer function.
// it will print 10.
