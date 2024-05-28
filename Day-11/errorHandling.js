const API_URL = "https://api.github.com/users/ReddiRani8496";

async function getData() {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    console.log(json);
  } catch (err) {
    console.error(err);
  }
}

getData();
