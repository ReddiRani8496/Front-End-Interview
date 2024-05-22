function counter() {
  count = 0;
  return function increment() {
    count++;
    console.log(count);
  };
}

let counter1 = counter();
counter1(); // 1
counter1(); // 2

let counter2 = counter(); // it will starts from count=0, this call is not linked to preivous call
counter2(); // 1
counter2(); // 2
