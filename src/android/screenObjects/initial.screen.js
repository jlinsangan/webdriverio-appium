class InitialScreen {
  get continueBtn() {
    return $('android=new UiSelector().textContains("Continue")');
  }

  get zipCodeLinkedText() {
    return $('android=new UiSelector().textContains("Enter zip code")');
  }

  get zipCodeField() {
    return $('//android.widget.EditText[@text="Enter zip code"]');
  }

  get searchBtn() {
    return $('android=new UiSelector().textContains("Search")');
  }

  get dontAllow() {
    return $(`//*[@text="Don’t allow"]`);
  }

  async allInitialSetup(zipCode) {
    await this.continueBtn.click();
    await this.zipCodeLinkedText.click();
    await this.zipCodeField.addValue(zipCode);
    await this.searchBtn.click();
    await this.dontAllow.click();
  }
}

export default new InitialScreen();
