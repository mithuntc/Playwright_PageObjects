import { test, expect } from '@playwright/test';
import { LoginPage } from '../page_objects/JavaScript/login_page.js';
import { PageObjectManager } from '../page_objects/JavaScript/pageObjectManager.js';
// importing json file to get login details & Product name
import loginDetails from '../utils/loginDetails.json' assert { type: 'json' };
const dataSet = JSON.parse(JSON.stringify(loginDetails)); // Parse the JSON to ensure it's valid
for (const data of dataSet) {
    test(`E_commerce End to End test for ${data.productName}`, async ({ page }) => {
        /**
         * An instance of the LoginPage page object, providing methods to interact with the login page.
         * @type {LoginPage}
         */
        const pageObjectManager = new PageObjectManager(page);
        //js file- Login js, DashboardPage
        const loginPage = pageObjectManager.getLoginPage();
        await loginPage.gotoLoginPage();
        await loginPage.validLogin(data.username, data.password);
        const dashboardPage = pageObjectManager.getDashboardPage();
        await dashboardPage.searchProductAddCart(data.productName);
        await dashboardPage.navigateToCart();
        const cartPage = pageObjectManager.getCartPage();
        await cartPage.VerifyProductIsDisplayed(data.productName);
        await cartPage.Checkout();
        const ordersReviewPage = pageObjectManager.getOrdersReviewPage();
        await ordersReviewPage.searchCountryAndSelect("ind", "India");
        const orderId = await ordersReviewPage.SubmitAndGetOrderId();
        console.log(orderId);
        await dashboardPage.navigateToOrders();
        const ordersHistoryPage = pageObjectManager.getOrdersHistoryPage();
        await ordersHistoryPage.searchOrderAndSelect(orderId);
        expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

    });
}