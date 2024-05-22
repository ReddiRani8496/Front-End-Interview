function outest() {
  var a = 10;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    var c = 30;
    return inner;
  }
  return outer;
}
var output = outest()("Hello"); // first () to call outest, second() to call outer
output(); // 10 Hello 30
