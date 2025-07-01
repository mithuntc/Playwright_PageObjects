import { Locator, Page } from "@playwright/test";
export class LoginPage {
    page:Page;
    loginButton:Locator;
    username:Locator;
    password:Locator;
    constructor(page:Page) {
        this.page = page;
        //locators for the login page
        this.loginButton = this.page.locator('#login');
        this.username = this.page.locator('#userEmail');
        this.password = this.page.locator('#userPassword');
    }
    async gotoLoginPage() {
        //hitting the landing page
        await this.page.goto('https://rahulshettyacademy.com/client/');
        console.log(await this.page.title());//printing the title
    }
    //function to login to the application
    async validLogin(email, password) {
        await this.username.fill(email);
        await this.password.fill(password);
        //clicking on the sign in button
        await this.loginButton.click();
        //waiting for the network to be idle
        await this.page.waitForLoadState('networkidle');
    }

} 