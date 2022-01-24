import { ClientFunction } from 'testcafe';
import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';

const url = 'https://sso.teachable.com/secure/673/identity/login';
const validUsername = 'testcafeautomation1@gmail.com';
const validPassword = 'Admin@123'
const invalidUserName = 'testName'
const incorrectUserName = 'test@gmail.com'
const incorrectPassword = 'Admin'
const nofieldError = 'This field is required'
const incorrectCredentialMessage = 'Your email or password is incorrect.'
const invalidUserNameMessage = 'Please provide a valid email address'



fixture`Login`
    .page(url);

test('Successful Login', async t => {
     //LoginPage.clickLogin()
     LoginPage.enterUserName(validUsername)
     LoginPage.enterPassword(validPassword)
     LoginPage.clickLoginSubmit() 
    await t.expect(HomePage.HomePage_Menu_Dropdown.exists).ok();    
});

test('Unsuccessful Login with invalid username', async t => {
   // LoginPage.clickLogin()
    LoginPage.enterUserName(invalidUserName)
    LoginPage.enterPassword(validPassword)
    await t.expect(LoginPage.LoginPage_ValidUsername_Message.innerText).contains(invalidUserNameMessage);
    LoginPage.clickLoginSubmit() 
    await t.expect(LoginPage.LoginPage_Incorrect_Credentials_Message.innerText).contains(incorrectCredentialMessage);
});

test('Unsuccessful Login with wrong password', async t => {
    //LoginPage.clickLogin()
    LoginPage.enterUserName(validUsername)
    LoginPage.enterPassword(incorrectPassword)
    LoginPage.clickLoginSubmit() 
    await t.expect(LoginPage.LoginPage_Incorrect_Credentials_Message.innerText).contains(incorrectCredentialMessage);     
});

test('Unsuccessful Login with wrong username', async t => {
    //LoginPage.clickLogin()
    LoginPage.enterUserName(incorrectUserName)
    LoginPage.enterPassword(validPassword)
    LoginPage.clickLoginSubmit() 
    await t.expect(LoginPage.LoginPage_Incorrect_Credentials_Message.innerText).contains(incorrectCredentialMessage);    
});

test('Unsuccessful Login with no username', async t => {
    //LoginPage.clickLogin()
    LoginPage.enterPassword(validPassword)
    LoginPage.clickLoginSubmit() 
    await t.expect(LoginPage.LoginPage_ValidUsername_Message).contains(nofieldError)
});

test('Unsuccessful Login with no password', async t => {
    //LoginPage.clickLogin()
    LoginPage.enterUserName(validUsername)
    LoginPage.clickLoginSubmit() 
    await t.expect(LoginPage.LoginPage_ValidPassword_Message).contains(nofieldError)    
});

test('Unsuccessful Login with no username and password', async t => {
    //LoginPage.clickLogin()
    LoginPage.clickLoginSubmit() 
    await t.expect(LoginPage.LoginPage_ValidPassword_Message).contains(nofieldError)   
    await t.expect(LoginPage.LoginPage_ValidUsername_Message).contains(nofieldError)     
});


test('Successful Logout', async t => {
    //LoginPage.clickLogin()
     LoginPage.enterUserName(validUsername)
     LoginPage.enterPassword(validPassword)
     LoginPage.clickLoginSubmit() 
    HomePage.clickMenu()
    HomePage.clickLogout()
    await t.expect(LoginPage.Login_button.exists).ok(); 
     
});