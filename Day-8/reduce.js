let arr = [1, 2, 3, 4, 5];

let output = arr.reduce((acc, cur) => {
  acc += cur;
  return acc;
}, 0);

console.log(output);
