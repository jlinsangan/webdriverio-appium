class CreateAccountScreen {
  get firstNamefield() {
    return $(
      '//*[@resource-id="ca.walmart.ecommerceapp:id/auth_field_first_name"]'
    );
  }

  get lastNameField() {
    return $(
      '//*[@resource-id="ca.walmart.ecommerceapp:id/auth_field_last_name"]'
    );
  }

  get emailField() {
    return $('//*[@resource-id="ca.walmart.ecommerceapp:id/auth_field_email"]');
  }

  get passwordField() {
    return $(
      '//*[@resource-id="ca.walmart.ecommerceapp:id/auth_field_password"]'
    );
  }

  get createAnAccountBtn() {
    return $('//*[@resource-id="ca.walmart.ecommerceapp:id/auth_button_main"]');
  }

  async fillUpDetails({ firstname, lastname, email, password }) {
    await this.firstNamefield.addValue(firstname);
    await this.lastNameField.addValue(lastname);
    await this.emailField.addValue(email);
    await this.passwordField.addValue(password);
    await this.createAnAccountBtn.click();
  }
}

export default new CreateAccountScreen();
