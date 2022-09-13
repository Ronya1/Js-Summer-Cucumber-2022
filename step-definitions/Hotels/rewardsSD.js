const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const HotelsRewards = require("../../Pages/Hotels/RewardsTEST");
const HR = new HotelsRewards();



Given(/^I am on hotels homepage123$/, async function() {
    await browser.url('https://www.hotels.com/');
    await browser.pause(1000)
});


When(/^I Click on Learn about Hotels.com Rewards$/, async function() {
    await HR.clickOnLearnAbout()
});


Then(/^I verify Hotels Rewards opened in a new window$/, async function() {
    await HR.verifyLinkOpenedInNewTab()
});


When(/^I Click on Join Now$/, async function() {
    await HR.clickOnJoinNowButton()
});


Then(/^I Verify Form is blank123$/, async function() {
        await HR.VerifyBlankForm()
});


Then(/^I Verify Continue button is NOT enabled$/, async function() {
    await HR.verifyButtonNotEnabled()
});







// Scenario: Verify Hotels Rewards Feature 
// Given I am on hotels homepage
// When I Click on Learn about Hotels.com Rewards
// Then I verify Hotels Rewards opened in a new window
// When I Click on Join Now
// Then I Verify Form is blank
// Then I Verify Continue button is NOT enabled