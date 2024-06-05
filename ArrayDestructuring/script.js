const colors = ["red", "green", "yellow", "blue"];

// printing two colors
// let [color1, color2] = colors; // let color1 = "red", color2 = "green

// console.log(color1); // red
// console.log(color2); // green

// printing all values

// let [color1, color2, color3, color4] = colors;

// console.log(color1); // red
// console.log(color2); // green
// console.log(color3); // yellow
// console.log(color4); // blue

// using rest operator

// let [color1, ...rest] = colors;

// console.log(color1); // red
// console.log(rest); // [ 'green', 'yellow', 'blue' ]

//skipping middle elements
let [color1, , , color4] = colors;

console.log(color1); // red
console.log(color4); // blue
