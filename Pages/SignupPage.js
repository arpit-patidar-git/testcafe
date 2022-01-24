import {Selector,t} from 'testcafe';



class SignupPage {


    constructor(){
        this.Signup_Button = Selector('#header-sign-up-btn')
        this.Signup_Name_Input = Selector('#user_name')
        this.Signup_Email_Input = Selector('#user_email')
        this.Signup_Password_Input = Selector('#password')
        this.Signup_Submit_Button = Selector('input[type="submit"]')
        this.Signup_Confirmation_Ribbon = Selector('.m-l-3-xs')
        this.Mail_Email = Selector('input[type="email"]')
        this.Mail_Password = Selector('input[type="password"]')
        this.Confirmation_Mail = Selector('td>div:nth-child(2)>span>span[name="Selenium Tutorial"]')
        this.Confirmation_Button = Selector('center>a')
        this.SinupPage_ValidPassword_Message = Selector('input.password+div')
        this.SignupPage_ValidUsername_Message = Selector('input#user_email+div')
        this.Signup_Invalid_Credentials_Message = Selector('h3+div')
        this.SignupConfirmation_Message = Selector('h3')

    }
     
   

    async clickSignup(){
        await t
        .maximizeWindow().click(this.Signup_Button)
    }
    async enterFullName(name){
        await t 
        .typeText(this.Signup_Name_Input, name)
    }

    async enterEmail(email){
        await t 
        .typeText(this.Signup_Email_Input, email)
    }

    async enterPassword(password){
        await t 
        .typeText(this.Signup_Password_Input, password)
    }

    async clickSignupSubmit(){
        await t 
        .click(this.Signup_Submit_Button);
    }

    async enterTestEmail(testEmail){
        await t 
        .typeText(this.Mail_Email, testEmail).pressKey('enter');
    }

    async enterTestPassword(testPassword){
        await t 
        .typeText(this.Mail_Password, testPassword).pressKey('enter');
    }

    async clickConfirmationMail(){
        await t
        .click(this.Confirmation_Mail).wait(2000).click(this.Confirmation_Button)
    }

}
    export default new SignupPage();