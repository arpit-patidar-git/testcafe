import {Selector,t} from 'testcafe';

class HomePage {

    constructor(){

        this.HomePage_Menu_Dropdown = Selector('li.dropdown>a')
        this.HomePage_Logout_Button = Selector('a[href="/sign_out"]')
    }

    async clickMenu(){
        await t
        .click(this.HomePage_Menu_Dropdown)
    }
    async clickLogout(){
        await t 
        .click(this.HomePage_Logout_Button).wait(2000)
    }

}
    export default new HomePage();