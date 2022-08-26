const Commands = require("../Commands");

class Loginpage {

    commands = new Commands();

    // Locators of login page webElement
    loginErrorLocator = '//div[contains(text(),"The email address or mobile number")]';
    // the below locator mine as for HW 1 I could not find the locator 
    loginErrorLocator2 = '//div[contains(text(),"The email or mobile number you entered isn’t connected to an account. ")]';

    // Function in order to interact with login page web elements

    /**
     * function to get if login error is displayed
     */
    async isLoginErrDisplayed() {
        await this.commands.isWebElementDisplayed(this.loginErrorLocator);
    }

    //Myfunction as for HW 1 I could not find the locator 
    async isLoginErrDisplayed2() {
        await this.commands.isWebElementDisplayed(this.loginErrorLocator2);
    }




}
module.exports = Loginpage;