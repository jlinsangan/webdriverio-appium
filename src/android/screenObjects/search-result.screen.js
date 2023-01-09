class SearchResultScreen {
  get cartCountBadge() {
    return $(
      '//*[@resource-id="ca.walmart.ecommerceapp:id/cart_summary_count"]'
    );
  }
}

export default new SearchResultScreen();
