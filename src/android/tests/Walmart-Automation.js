const { default: initialScreen } = require("../screenObjects/initial.screen");
const {
  default: resultScreen,
} = require("../screenObjects/search-result.screen");
const {
  default: searchScreen,
} = require("../screenObjects/search-header.screen");
const { default: checkoutScreen } = require("../screenObjects/checkout.screen");
const { default: signinScreen } = require("../screenObjects/signin.screen");
const {
  default: createAccountScreen,
} = require("../screenObjects/create-account.screen");

require("dotenv").config();

const userDetails = {
  firstname: "test",
  lastname: "lastname",
  email: "test.lastnamexxxxxx@gmail.com",
  password: "P@ssw0rd",
};

describe("Walmart Mobile Automation Exam", async () => {
  it.only("Main Exam", async () => {
    await initialScreen.allInitialSetup("M3H4X8");
    const passwordError = await $('//*[@text="Please enter a password"]');

    await searchScreen.searchItem("paper");
    await driver.pressKeyCode(66);

    let value = 0;
    do {
      await $(
        'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Add to cart")'
      ).click();
      if ((await resultScreen.cartCountBadge.getText()) == 1) {
        value += 1;
      }
    } while (value != 1);

    await searchScreen.cartIcon.click();
    await driver.pause(5000);
    //await cartIcon.click();

    let rawText = await checkoutScreen.subTotal.getText();

    const totalAddedItems = rawText.split(" ")[1].replace("(", "");

    await expect(totalAddedItems).toEqual("1");

    await checkoutScreen.checkOutBtn.click();

    await signinScreen.signInEmailOnly(process.env.EMAIL);
    await expect(passwordError).toExist();
  });

  it("Additional Points - Registered Account", async () => {
    await initialScreen.allInitialSetup("M3H4X8");
    await searchScreen.signInLinkedText.click();
    await signinScreen.login(process.env.EMAIL, process.env.PASSWORD);
    await $("~Account").click();
    await $(
      '//*[@resource-id="ca.walmart.ecommerceapp:id/account_wallet_card_layout"]'
    ).click();
    const paymentHeader = await $(
      '//*[@resource-id="ca.walmart.ecommerceapp:id/payment_methods_title"]'
    ).getText();
    await expect(paymentHeader).toContain("Add");
  });

  it("Additional Points - NOT Registered", async () => {
    await initialScreen.allInitialSetup("M3H4X8");
    await searchScreen.signInLinkedText.click();
    await signinScreen.login(process.env.EMAIL, process.env.INC_PASSWORD);
    let msg = await (
      await $('//*[@resource-id="ca.walmart.ecommerceapp:id/text"]')
    ).getText();
    await expect(msg).toContain("do not match");
    await signinScreen.createAccountLinkedText.click();
    await createAccountScreen.fillUpDetails(userDetails);
    await $("~Account").click();
    await $(
      '//*[@resource-id="ca.walmart.ecommerceapp:id/account_wallet_card_layout"]'
    ).click();
    const paymentHeader = await $(
      '//*[@resource-id="ca.walmart.ecommerceapp:id/payment_methods_title"]'
    ).getText();
    await expect(paymentHeader).toContain("Add");
  });
});
