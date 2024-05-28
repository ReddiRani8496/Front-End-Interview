const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value");
  }, 10000);
});

async function handlingPromise() {
  const res = await promise; // waits until the promise is fulfilled
  console.log("Hello world!");
  console.log(res); // to access the value in the promise i,e, Promise resolved value

  const res1 = await promise;
  console.log(res1); // to access the value in the promise i,e, Promise resolved value
}

handlingPromise();

/*
    Flow of execution
    first the handlePromise method is called
    then the promise is called but it will takes 10seconds to complete, so it won't there
    
    after 10seconds the promise is fulfilled
    simultaneously console.log("Hello world!") is executed
    then the console.log(res) is executed

    immediately res1 promise is fulfilled
    then console.log(res1) is executed
  
    After 10 seconds the output is displayed
    Output: Hello world
            Promise resolved value
            Promise resolved promise
    */
