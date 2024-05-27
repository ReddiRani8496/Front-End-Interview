let cart = ["Pants", "Kurtas", "Shirts", "Shoes"];

const promise = createOrder(cart);
console.log(promise);

promise.then(function (orderId) {
  // order Id is obtained from the createorder function
  console.log(orderId);
  // proceedToPayment(ordertId);
});

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //create order
    // validate cart
    //order Id

    if (!validate(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderId = "123";
    if (orderId) {
      //   resolve(orderId);
      // to set orderId should be set after 5 seconds
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function validate(cart) {
  return true;
}
