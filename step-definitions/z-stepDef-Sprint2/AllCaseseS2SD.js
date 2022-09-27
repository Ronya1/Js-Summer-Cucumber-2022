const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");

Given(/^I am on Hotels.com home page020202$/, async function() {
    await browser.url('https://www.hotels.com/');
    await browser.pause(1000)
}); 

When(/^I Click on Dates$/, async function() {
    let dateSelectorLocator = await $(`//button[@id="date_form_field-btn"]`)
    await dateSelectorLocator.click() 
    await browser.pause(1000)
}); 

Then(/^I Go to current month if not displayed$/, async function() {
    let dateBackButton = await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]`)
    await dateBackButton.click()
    await browser.pause(1000)
}); 



// Scenario: Verify past dates and back button on Current month's calendar is disabled

//     And I Go to current month if not displayed
//     Then I Verify For current month Past dates if any are disabled.
//     And I Verify Back button on current month is disabled