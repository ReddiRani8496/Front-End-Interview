let button = document.getElementsByTagName("button")[0];
let span = document.getElementsByTagName("span")[0];
let div = document.getElementsByTagName("div")[0];
let body = document.getElementsByTagName("body")[0];
let html = document.getElementsByTagName("html")[0];

html.addEventListener("click", () => {
  console.log("html was clicked");
});

body.addEventListener("click", () => {
  console.log("body was clicked");
});

div.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("div was clicked");
});

span.addEventListener("click", () => {
  console.log("span was clicked");
});

button.addEventListener("click", () => {
  console.log("button was clicked");
});
