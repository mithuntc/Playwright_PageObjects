import { DashboardPage } from "./dashboard_page.js";
import { LoginPage } from "./login_page.js";
import { OrdersHistoryPage } from "./OrdersHistoryPage.js";
import { OrdersReviewPage } from "./OrdersReviewPage.js";
import { CartPage } from "./CartPage.js";

export class PageObjectManager {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashBoardPage = new DashboardPage(this.page);
        this.ordersHistoryPage = new OrdersHistoryPage(this.page);
        this.ordersReviewPage = new OrdersReviewPage(this.page);
        this.cartPage = new CartPage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getDashboardPage() {
        return this.dashBoardPage;
    }

    getCartPage() {
        return this.cartPage;
    }


    getOrdersHistoryPage() {
        return this.ordersHistoryPage;
    }

    getOrdersReviewPage() {
        return this.ordersReviewPage;
    }
}