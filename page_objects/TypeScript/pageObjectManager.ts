import { DashboardPage } from "./dashboard_page.ts";
import { LoginPage } from "./login_page.ts";
import { OrdersHistoryPage } from "./OrdersHistoryPage.ts";
import { OrdersReviewPage } from "./OrdersReviewPage.ts";
import { CartPage } from "./CartPage.ts";
import { Page } from "@playwright/test";

export class PageObjectManager {
    loginPage: LoginPage;
    dashBoardPage: DashboardPage;
    ordersHistoryPage: OrdersHistoryPage;
    ordersReviewPage: OrdersReviewPage;
    cartPage: CartPage;
    page: Page;
    constructor(page:Page) {
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