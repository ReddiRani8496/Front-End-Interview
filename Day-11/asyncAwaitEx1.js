/**
 * What is async?
 * What is await?
 * How async await works behind the scenes
 * Examples of using async/await
 * Error handling
 */

// async always returns a promise
async function getData() {
  return "Hello, world!";
}

const promise = getData(); // returns the promise

promise.then((res) => console.log(res)); // to access the value in the promise i,e, Hello, world!
