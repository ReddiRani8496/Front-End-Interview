let count = 0;

function getData() {
  console.log("Fetching Data....", count++);
}

const debouncer = (fn, delay) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(context, args), delay);
  };
};

const betterFunction = debouncer(getData, 300);
