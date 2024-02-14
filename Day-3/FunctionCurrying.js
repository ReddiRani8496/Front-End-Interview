let multiply = function (x, y) {
  console.log(x * y);
};

let product = multiply.bind(this, 2); // it always sets value of x to 2

product(5); // here 5 points to value of y
