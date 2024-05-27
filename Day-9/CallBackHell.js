let cart = ["pants", "kurtas", "shirts", "shoes"];

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

// this is called as callback hell, all functions are nested and clumsy
// There is a problem of inversion of control it means, we don't know whether the
// proceed to payment function excutes or not, if it exceutes also we are not sure how many times
// the method is called.
