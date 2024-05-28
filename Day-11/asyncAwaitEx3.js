// instead of using then in promise, we can use await inside the async function

const promise = new Promise((resolve, reject) => {
  resolve("Promise resolved value");
});

async function handlingPromise() {
  const res = await promise; // waits until the promise is fulfilled
  console.log(res); // to access the value in the promise i,e, Promise resolved value
}

handlingPromise();

// using the then to access promise value
// function getData() {
//     promise.then((data) => console.log(data));
// }
// getData(); // returns the value in promise
