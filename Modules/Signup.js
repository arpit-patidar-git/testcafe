import { ClientFunction } from 'testcafe';
import LoginPage from '../Pages/LoginPage';
import SignupPage from '../Pages/SignupPage';

const email_start = 'testcafeautomation1+'
const random_num = Math.floor((Math.random() * 10000) + 1);
const email_end = '@gmail.com'
const email_new = email_start.concat(random_num).concat(email_end)
const test_email = 'testcafeautomation1@gmail.com'
const password = 'Admin@123'
const gmail_url = 'https://accounts.google.com/signin/v2/identifier?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin'
const url = 'https://www.selenium-tutorial.com/'
const name = 'testcafe automation'
const old_email = 'testcafeautomation1@gmail.com'
const short_password = 'Add'
const nofieldError = 'This field is required'
const invalidUserNameMessage = 'Email is invalid'
const shortPasswordMessage = 'Password must be at least 6 characters'
const userAlreadyExistMessage = 'Email is already in use. Please log in to your account.' 
const confirmation_host_url = 'sso.teachable.com'

fixture`Signup`
    .page(url);



test('Unsuccessful Signup with already existing email', async t => {
    SignupPage.clickSignup()
    SignupPage.enterFullName(name)
    SignupPage.enterEmail(old_email)
    LoginPage.enterPassword(password)
    SignupPage.clickSignupSubmit()
    await t.expect(SignupPage.Signup_Invalid_Credentials_Message.innerText).contains(userAlreadyExistMessage);

});

test('Unsuccessful Signup with invalid email', async t => {
    SignupPage.clickSignup()
    SignupPage.enterFullName(name)
    SignupPage.enterEmail(email_start)
    LoginPage.enterPassword(password)
    SignupPage.clickSignupSubmit()
    await t.expect(SignupPage.Signup_Invalid_Credentials_Message.innerText).contains(invalidUserNameMessage);
});

test('Unsuccessful Signup with invalid password', async t => {
    SignupPage.clickSignup()
    SignupPage.enterFullName(name)
    SignupPage.enterEmail(email_new)
    LoginPage.enterPassword(short_password)
    SignupPage.clickSignupSubmit()
    await t.expect(SignupPage.Signup_Invalid_Credentials_Message.innerText).contains(shortPasswordMessage);

});


test('Unsuccessful Signup with no fields', async t => {
    SignupPage.clickSignup()
    SignupPage.clickSignupSubmit()
    await t.expect(SignupPage.Signup_Invalid_Credentials_Message.innerText).contains(nofieldError);

});

test('Successful Signup', async t => {
    SignupPage.clickSignup()
    SignupPage.enterFullName(name)
    SignupPage.enterEmail(email_new)
    console.log(email_new)
    LoginPage.enterPassword(password)
    SignupPage.clickSignupSubmit()
   await t.expect(SignupPage.Signup_Confirmation_Ribbon.exists).ok();    
   await t.navigateTo(gmail_url)
   SignupPage.enterTestEmail(test_email)
   await t.wait(2000)
   SignupPage.enterTestPassword(password)
   await t.wait(10000)
   SignupPage.clickConfirmationMail()
   await t.wait(5000)
   await t.switchToWindow(w => w.url.host === confirmation_host_url)
   await t.expect(SignupPage.SignupConfirmation_Message).ok();

});