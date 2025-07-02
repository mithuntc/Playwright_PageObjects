import { chromium } from 'playwright'; // ✅ way to launch browser
import { PageObjectManager } from '../../page_objects/JavaScript/pageObjectManager.js';
import { After , Before , BeforeStep, AfterStep, Status} from '@cucumber/cucumber';
Before(async function () {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.pageObjectManager = new PageObjectManager(this.page);
});
BeforeStep(async function () {
    // This will run before each step
    console.log("Before Step: Initializing step execution");   
});
AfterStep(async function ({result}) {
    if(result.status===Status.FAILED) {
        console.log("Step failed, taking screenshot");
        const screenshot = await this.page.screenshot();
        this.attach(screenshot, 'image/png');
    }
});
After(async function () {
    console.log("BDD Test Completed")
});
