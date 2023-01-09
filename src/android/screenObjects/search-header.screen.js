class SearchHeader {
  get searchItemField() {
    return $('//*[@text="Search Walmart"]');
  }

  get cartIcon() {
    return $(
      '//*[@resource-id="ca.walmart.ecommerceapp:id/cart_summary_icon"]'
    );
  }

  get signInLinkedText() {
    return $(
      '//*[@resource-id="ca.walmart.ecommerceapp:id/integration_toolbar_auth_title"]'
    );
  }

  async searchItem(itemName) {
    await this.searchItemField.click();
    await this.searchItemField.setValue(itemName);
  }
}

export default new SearchHeader();
