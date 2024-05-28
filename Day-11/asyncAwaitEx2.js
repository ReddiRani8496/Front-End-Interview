// promise
const promise = new Promise((resolve, reject) => {
  resolve("Promise resolved value");
});

// async always returns promise
async function getData() {
  return promise;
}

const promiseData = getData(); // returns the promise object
console.log(promiseData);
promiseData.then((res) => console.log(res)); // to access the value in the promise i,e, Promise resolved value
