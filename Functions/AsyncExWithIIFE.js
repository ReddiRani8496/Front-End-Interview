(async function () {
  let url = "https://reddirani8496.github.io/TMSData/users.json";
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
})(); // once this file is loaded, this function is called.
// we can restrict the access
// we can't access outside the function
