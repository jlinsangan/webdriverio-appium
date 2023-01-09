class SignInScreen {
  get emailField() {
    return $('//*[@text="Email"]');
  }

  get passwordField() {
    return $(
      '//*[@resource-id="ca.walmart.ecommerceapp:id/auth_field_password"]'
    );
  }

  get signInBtn() {
    return $('//*[@text="Sign in"]');
  }

  get createAccountLinkedText() {
    return $(
      '//*[@resource-id="ca.walmart.ecommerceapp:id/auth_button_create_account"]'
    );
  }

  async signInEmailOnly(email) {
    await this.emailField.addValue(email);
    await this.signInBtn.click();
  }

  async login(username, password) {
    await this.emailField.addValue(username);
    await this.passwordField.addValue(password);
    await this.signInBtn.click();
  }
}

export default new SignInScreen();
