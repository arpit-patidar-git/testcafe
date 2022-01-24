import {Selector,t} from 'testcafe';


class LoginPage {

    constructor(){
        this.Login_button = Selector('a[href="/sign_in"]')
        this.LoginPage_Username_Input = Selector('#email')
        this.LoginPage_Password_Input = Selector('#password')
        this.LoginPage_Submit_Button = Selector('input[type="submit"]')
        this.LoginPage_Incorrect_Credentials_Message = Selector('h3+div')
        this.LoginPage_ValidPassword_Message = Selector('input.password+div')
        this.LoginPage_ValidUsername_Message = Selector('input#email+div')
    }


    async clickLogin(){
        await t
        .maximizeWindow().click(this.Login_button)
    }
    async enterUserName(username){
        await t 
        .typeText(this.LoginPage_Username_Input, username)
    }

    async enterPassword(password){
        await t 
        .typeText(this.LoginPage_Password_Input, password).wait(2000)
    }

    async clickLoginSubmit(){
        await t 
        .click(this.LoginPage_Submit_Button).wait(2000);
    }
}
    export default new LoginPage();