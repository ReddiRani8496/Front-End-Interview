let displayDetails = (function () {
  let name = "Rani";
  let age = 24;
  function displayName() {
    console.log(name);
  }

  return {
    personName: name,
    showName: displayName(),
  };
})();

console.log(displayDetails.personName);
console.log(displayDetails.showName());
