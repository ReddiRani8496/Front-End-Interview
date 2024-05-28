const promise = new Promise((resolve, reject) => {
  resolve("Promise resolved value");
});

async function handlingPromise() {
  const res = await promise; // waits until the promise is fulfilled
  console.log(res); // to access the value in the promise i,e, Promise resolved value
  console.log("Hello world!");
}

handlingPromise();

/*
Flow of execution

first the handlePromise method is called
then the promise is resolved
then the console.log(res) is executed
then the console.log("Hello world!") is executed
*/
