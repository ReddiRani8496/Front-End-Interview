let counter = (function () {
  let count = 0;
})(); // calling the function immediately

//console.log(counter.count); // we can't access the count variable, it is like private variable scope within the function

let incrementFun = (function () {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
})();

incrementFun.increment();
//incrementFun.decrement();
console.log(incrementFun.getCount());

(function () {
  console.log("IIFE");
});
