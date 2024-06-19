let displayDetails = (function () {
  let name = "Rani";
  let age = 24;
  function displayName() {
    console.log(name);
  }
})();

// console.log(displayDetails.name); // throws error, because the scope of name is within the function
console.log(displayDetails.displayName()); // throws error, because the scope of function is within the function
