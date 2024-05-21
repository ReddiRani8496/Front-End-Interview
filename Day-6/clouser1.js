function z() {
  var b = 100;
  function x() {
    var a = 10;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}
z();

// due to lexical environment, the inner function i.e., x is binded with outer function variable a
// even y is bound with x which is bounded with z, so y can access and b.
// it prints 10 and 100.
