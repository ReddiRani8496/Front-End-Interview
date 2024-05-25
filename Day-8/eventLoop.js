console.log("Start");

setTimeout(function cb() {
  console.log("Call back");
}, 5000);

console.log("End");

/*
    first log startement is printed first
    then call back function is not executed, but it is stored in the call back queue,
    because we set the timeout as 5000ms
    then log startement is printed end.
    After 5000ms the call back function which is stored in the call back queue 
    is passed to stack by the EVENT LOOP to execute. It prints Callback as output
*/
