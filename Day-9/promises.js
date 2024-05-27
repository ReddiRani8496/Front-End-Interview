const github_api = "https://reddirani8496.github.io/BhagavadGitaData/";

let user = fetch(github_api); // promise is stored in user variable

console.log(user); // on the top it will show pending, inside it will show fullfilled because browser immediately update the status

user.then(function (data) {
  console.log(data); // if promise is fulfilled then it will exceutes this function.
});

// states of promise: fullfilled, pending, rejected

// promise is an event represents eventual completion of asynchronous operation.
// in the above example fetching the github_api is asynchronous operation.
// user represents the promise, which stores the result of the asynchronous operation
