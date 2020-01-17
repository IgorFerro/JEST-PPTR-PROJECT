import HomePage from '../pages/HomePage';
import TopBar from '../pages/components/TopBar';
import LoginPage from '../pages/LoginPage';

describe('Example', () => {
    let homepage;
    let topbar;
    let loginpage;

    beforeAll(async () =>{
        jest.setTimeout(15000);
        homepage = new HomePage();
        topbar = new TopBar();
        loginpage = new LoginPage();
    })

    it('home page should work', async () => {
       await homepage.visit();
    });
    it('navbar should be displayed', async () => {
        await homepage.isNavbarDisplayed();
        await topbar.isTopBarDisplayed()
     });
     it('try to login', async () => {
        await loginpage.visit();
        await loginpage.isLoginFormDisplayed();
        await loginpage.login('username','password');
        await loginpage.wait(5000);
       
     });


})