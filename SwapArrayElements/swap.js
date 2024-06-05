let arr = [10, 20];

[arr[0], arr[1]] = [arr[1], arr[0]]; // here in arr[0], the value of arr[1] is stored, same for arr[1]=arr[0]
console.log(arr);

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);
