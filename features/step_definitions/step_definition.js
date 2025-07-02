import { When, Then, Given} from '@cucumber/cucumber';
import { expect } from '@playwright/test';
Given('Login as a customer with {string} and {string}', { timeout: 1000 * 1000 }, async function (username, password) {
    //js file- Login js, DashboardPage
    const loginPage = this.pageObjectManager.getLoginPage();
    await loginPage.gotoLoginPage();
    await loginPage.validLogin(username, password);
});
When('I add an {string} to the cart', async function (productName) {
    this.dashboardPage = this.pageObjectManager.getDashboardPage();
    await this.dashboardPage.searchProductAddCart(productName);
    await this.dashboardPage.navigateToCart();
});

Then('Verify that the cart contains {string}', async function (productName) {
    const cartPage = this.pageObjectManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(productName);
    await cartPage.Checkout();
});
When('Enter valid details and place the order', async function () {
    const ordersReviewPage = this.pageObjectManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    this.orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(this.orderId);
});

Then('Verify that the order is placed successfully also verify the order details', async function () {
    await this.dashboardPage.navigateToOrders();
    const ordersHistoryPage = this.pageObjectManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(this.orderId);
    expect(this.orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
}); 