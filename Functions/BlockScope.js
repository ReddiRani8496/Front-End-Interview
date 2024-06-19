let age = 20;

let displayAge = (function () {
  let age = 40;
  console.log(age);
})();

// output is 40 beacuase, the function will consider the age within the scope,
// if within the scope there is no age, then it will check the outer scope
// but in the above example age is there inside the scope, so output is 40.
