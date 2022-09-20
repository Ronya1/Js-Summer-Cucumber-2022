const { Given, Then, When } = require("@wdio/cucumber-framework");
//const { expect } = require("chai");


// Given(/^I am on Hotels.com home page0211$/, async function () { 
//     await browser.url('https://www.hotels.com/')
//     browser.pause(2000)
// });

Given(/^I am on Hotels.com home page0211$/, async function() {
    await browser.url('https://www.hotels.com/');
    await browser.pause(2000)

});

When(/^I Click on Travelers$/, async function() { 
    //let thisLocator = await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[1]`).click()
    //await thisLocator.click()
    await $(`//button[@class="uitk-menu-trigger uitk-fake-input uitk-form-field-trigger"]`).click()
    await browser.pause(1000)
});

When(/^I Select “Adults" as 6$/, async function() { 
    await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/button[2]`).click()
    await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/button[2]`).click()
    await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/button[2]`).click()
    await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/button[2]`).click()
    await browser.pause(1000)
});

When(/^I Select “Children” as 3$/, async function() { 
    await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[2]`).click()
    await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[2]`).click()
    await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[2]`).click()
    await browser.pause(1000)
});

When(/^I Select first child age: 4$/, async function() { 
    await $(`//select[@id="age-traveler_selector_children_age_selector-0-0"]`).click()
    await $(`//select[@id="age-traveler_selector_children_age_selector-0-0"]//option[@value="4"]`).click()
    await browser.pause(1000)
});

When(/^I Select second child age: Under 1$/, async function() { 
    await $(`//select[@id="age-traveler_selector_children_age_selector-0-1"]`).click()
    await $(`//select[@id="age-traveler_selector_children_age_selector-0-1"]//option[@value="0"]`).click()
    await browser.pause(1000)
});

When(/^I Select third child age: 7$/, async function() { 
    await $(`//select[@id="age-traveler_selector_children_age_selector-0-2"]`).click()
    await $(`//select[@id="age-traveler_selector_children_age_selector-0-2"]//option[@value="7"]`).click()
    await browser.pause(1000)
});

When(/^I Click Done$/, async function() { 
    await $(`//button[text()="Done"]`).click()
    await browser.pause(3000)
});

Then(/^I Verify total number of guests in sum of adults and children as same as selected on step #3 and #4.$/, async function() { 
    //let numberDisplayed = await $(`//button[@class="uitk-menu-trigger uitk-fake-input uitk-form-field-trigger"]`).getText()
    let numberDisplayed = await $(`//span[contains(text(),'Travelers:')]`).getText()
    console.log(`AAAAAA ${numberDisplayed}`);
    await browser.pause(3000)
});
//tagName[not(@attrName='value')]
// Then I Verify total number of guests in sum of adults and children as same as selected on step #3 and #4.