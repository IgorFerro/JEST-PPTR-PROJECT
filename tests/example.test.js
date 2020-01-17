import HomePage from '../pages/HomePage';
import TopBar from '../pages/components/TopBar';

describe('Example', () => {
    let homepage;
    let topbar

    beforeAll(async () =>{
        jest.setTimeout(15000);
        homepage = new HomePage();
        topbar = new TopBar();
    })

    it('home page should work', async () => {
       await homepage.visit();
    });
    it('navbar should be displayed', async () => {
        await homepage.isNavbarDisplayed();
        await topbar.isTopBarDisplayed()
     });

})