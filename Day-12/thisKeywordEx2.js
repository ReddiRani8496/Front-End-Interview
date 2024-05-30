"use strict";

function hello() {
  console.log(this); // prints undefined in strict mode
}
hello();

window.hello(); // now this points to window object and prints window object
