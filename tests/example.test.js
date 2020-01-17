import HomePage from '../pages/HomePage';
import TopBar from '../pages/components/TopBar';
import LoginPage from '../pages/LoginPage';
import FeedbackPage from '../pages/FeedbackPage';

describe('Example', () => {
    let homepage;
    let topbar;
    let loginpage;
    let feedbackpage;

    beforeAll(async () =>{
        jest.setTimeout(15000);
        homepage = new HomePage();
        topbar = new TopBar();
        loginpage = new LoginPage();
        feedbackpage = new FeedbackPage();
    })

    it('home page should work', async () => {
       await homepage.visit();
    });
    it('navbar should be displayed', async () => {
        await homepage.isNavbarDisplayed();
        await topbar.isTopBarDisplayed()
     });
     /*
     it('try to login', async () => {
        await loginpage.visit();
        await loginpage.isLoginFormDisplayed();
        await loginpage.login('username','password');
        await loginpage.wait(5000);
       });*/
       it('feedback should work', async () => {
         await feedbackpage.visit();
         await feedbackpage.isFeedbackFormDisplayed();
         await feedbackpage.submitFeedback('Igor','email@email.com','subject','comment');
         await feedbackpage.wait(5000);
     });

})