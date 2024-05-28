const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value");
  }, 5000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value");
  }, 10000);
});

async function handlingPromise() {
  console.log("Method Called");
  const res = await promise; // waits until the promise is fulfilled
  console.log("First promise fulfilled");
  console.log(res); // to access the value in the promise i,e, Promise resolved value

  const res1 = await promise2;
  console.log("Second promise fulfilled");
  console.log(res1); // to access the value in the promise i,e, Promise resolved value
}

handlingPromise();

/*
          Flow of execution
    
          first console.log(Method called) function is called
    
          then the handlePromise method is called
          then the promise is called but it will takes 10seconds to complete, so it won't there
          
          after 5seconds the promise is fulfilled
           console.log("First promise fulfilled") is executed
          then the console.log(res) is executed
      
          after 10seconds res1 promise is fulfilled
           console.log("Second promise fulfilled") is executed
          then console.log(res1) is executed
    
           Output:
           Method called
        
          After 5 seconds the output is displayed
                  First promise fulfilled
                  Promise resolved value
                  
          After 10 seconds the output is displayed
                  Second promise fulfilled
                  Promise resolved promise
          */
