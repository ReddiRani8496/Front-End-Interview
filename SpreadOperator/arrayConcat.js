let colors = ["red", "green", "blue"];

let additionalColors = [...colors, "black", "white"]; // here using spread operator the array elements are scattered as individual elements

console.log(additionalColors);
console.log(colors);

let addingColors = [colors, "black", "white"]; // if we use array directly it won't spread colors, instead it considers as array and returns array

console.log(addingColors);
