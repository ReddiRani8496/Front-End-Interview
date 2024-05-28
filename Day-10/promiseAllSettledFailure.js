const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p2 failure"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 success"), 2000);
});

Promise.allSettled([p1, p2, p3]).then((res) => {
  console.log(res); // after 3 seconds we will get output, even we have error in promise2, it will wait for all the promises.
});
