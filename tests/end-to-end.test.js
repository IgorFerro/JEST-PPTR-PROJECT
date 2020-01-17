import HomePage from '../pages/HomePage';
import TopBar from '../pages/components/TopBar';
import LoginPage from '../pages/LoginPage';
import FeedbackPage from '../pages/FeedbackPage';

import {username,password,timeout} from '../config';

describe('End-To-End Test', () => {
    let homePage;
    let topBar;
    let loginPage;
    let feedbackPage;

    beforeAll(async () =>{
        jest.setTimeout(timeout);
        homePage = new HomePage();
        topBar = new TopBar();
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
     it('Should login to application', async () =>{
         await homePage.visit();
         await topBar.isTopBarDisplayed();
         await topBar.clickSignInButton();
         await loginPage.isLoginFormDisplayed();
         await loginPage.login(username, password)

     })

})