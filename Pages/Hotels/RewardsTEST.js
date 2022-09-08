const { expect } = require("chai");
class HotelsRewards {

// Locators 
learnHotelsRewardsButton = $('//a[text()="Learn about Hotels.com Rewards"]')
joinNowButton = $('//a[text()="Join Now"]')
emailValueField = $('//div[text()="Email address"]')
firstNameValueField = $('//div[text()="First name"]')
lastNameValueField = $('//div[text()="Last name"]')
passwordValueField = $('//div[text()="Password"]')
rewardsContinueButton = $('//button[@id="signupFormSubmitButton"]')


//Functions 

async clickOnLearnAbout() {
    await this.learnHotelsRewardsButton.click()
    await browser.pause(1000)
}


async verifyLinkOpenedInNewTab() {
    const allHandles = await browser.getWindowHandles();
    await expect(allHandles.length, 'Only 1 handle present window not open').to.equal(2);
    const getHotelsMainTitle = await browser.getTitle();
    console.log(`AAAAA ${getHotelsMainTitle}`);
    for (const handle of allHandles) {        // allHandles = [h1, h2]
        if (handle != getHotelsMainTitle) {
            await browser.switchToWindow(handle);
        }
    const newPageTitle = await browser.getTitle()
    console.log(`BBBBBB ${newPageTitle}`);
    //expect(newPageTitle, 'New page is not Present').to.equal('Get Free* Nights & Secret Prices');
    }
}

async clickOnJoinNowButton() {
    await this.joinNowButton.click()
    await browser.pause(1000)
}

async VerifyBlankForm() {
    let emailValue = await this.emailValueField.getText()
    //console.log(`DDDDDD ${emailValue}`);
    expect(emailValue, 'Value not blank').to.equal('Email address')
    await browser.pause(1000)

    let firstNameValue = await this.firstNameValueField.getText()
    //console.log(`DDDDDD ${firstNameValue}`);
    expect(firstNameValue, 'Value not blank').to.equal('First name')
    await browser.pause(1000)

    let lastNameValue = await this.lastNameValueField.getText()
    //console.log(`DDDDDD ${lastNameValue}`);
    expect(lastNameValue, 'Value not blank').to.equal('Last name')
    await browser.pause(1000)

    let passwordValue = await this.passwordValueField.getText()
    console.log(`DDDDDD ${passwordValue}`);
    expect(passwordValue, 'Value not blank').to.equal('Password')
    await browser.pause(1000)

}

async verifyButtonNotEnabled() {
    let result = await this.rewardsContinueButton.isEnabled()
    expect(result, 'Value not blank').to.be.false;
}



}
module.exports = HotelsRewards;