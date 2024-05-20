var x = 7;

function getName() {
  console.log("Hello world!");
}
getName(); // prints the log message "Hello world!"
console.log(x); // prints 7
console.log(getName); // prints whole the function

getMessage(); // In the code area the method is called and prints the "HI"
console.log(getMessage); // prints the whole function and allocated memory
console.log(a); // variable a is not defined before the log, so it prints undefined
function getMessage() {
  console.log("Hi");
}

var a = 10;
