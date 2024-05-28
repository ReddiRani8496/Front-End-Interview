const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p2 failure"), 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 success"), 2000);
});

Promise.all([p1, p2, p3]).then((res) => {
  console.log(res); // returns the first setteled promise, even promise2 fails, it won't throw error, it will check for next settled promise.
});

// if all  promises are failed it will throw aggregate error.
