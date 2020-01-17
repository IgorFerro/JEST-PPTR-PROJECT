import BasePAge from "./BasePage";

export default class HomePage extends BasePAge {
    async visit(){
        await page.goto('http://zero.webappsecurity.com/');
        await page.waitForSelector('#nav')
    }

    async isNavbarDisplayed(){
        await page.waitForSelector('#pages-nav');
        await page.waitForSelector('#homeMenu');
        await page.waitForSelector('#onlineBankingMenu');
        await page.waitForSelector('#feedback');

    }
    async clickHomepageLink(){
        
        await page.click('#homeMenu');
    }
    async clickHomepageLink(){

        await page.click('#onlineBankingMenu');
    }
    async clickHomepageLink(){
        await page.click('#feedback');
    }
}