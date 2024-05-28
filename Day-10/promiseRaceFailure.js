const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p2 failure"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 success"), 2000);
});

Promise.race([p1, p2, p3]).then((res) => {
  console.log(res); // after 1 second we will get error, because promise 2 was rejected, it won't wait for other promises
});
