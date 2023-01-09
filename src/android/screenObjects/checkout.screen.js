class CheckOutScreen {
  get subTotal() {
    return $('//*[@resource-id="ca.walmart.ecommerceapp:id/label"]');
  }

  get checkOutBtn() {
    return $(
      '//*[@resource-id="ca.walmart.ecommerceapp:id/cart_continue_to_checkout_button"]'
    );
  }
}

export default new CheckOutScreen();
