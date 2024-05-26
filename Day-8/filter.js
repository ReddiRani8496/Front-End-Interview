let arr = [1, 2, 3, 4, 5, 6];

// let output = arr.filter(function (value) {
//   return value % 2 == 0;
// });

// console.log(output);

let output = arr.filter((value) => value % 2 === 0);
console.log(output);
