import HomePage from '../pages/HomePage';
import TopBar from '../pages/components/TopBar';
import LoginPage from '../pages/LoginPage';
import FeedbackPage from '../pages/FeedbackPage';

describe('End-To-End Test', () => {
    let homePage;
    let topbar;
    let loginPage;
    let feedbackPage;

    beforeAll(async () =>{
        jest.setTimeout(15000);
        homePage = new HomePage();
        topbar = new TopBar();
        loginPage = new LoginPage();
        feedbackPage = new FeedbackPage();
    })

    it('Should load homepage', async () => {
        await homePage.visit();
        await homePage.isNavbarDisplayed();
     });
     it('Should subimit feedback', async () => {
        await homePage.clickFeedbackLink();
        await feedbackPage.isFeedbackFormDisplayed();
        await feedbackPage.submitFeedback('igor','email@email','subject','comment');
     });

})