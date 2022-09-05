const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const CREssentials = require("../../Pages/classroomEssentials/homePage");
const CRE1 = new CREssentials


Given(/^I am on classroom essentails homepage$/, async function() {
    await browser.url('https://classroomessentialsonline.com/')
    browser.pause(2000)
});

// When(/^I move mouse on Church Chairs$/, async function() {
//     const churchChairsMenuElement = await $('//a[@href="/church-chairs/"]');
//     await churchChairsMenuElement.moveTo();
//     browser.pause(2000)
// });

When(/^I move mouse on Church Chairs$/, async function() {
    await CRE1.moveMouseOverElement();
});


// Then(/^I verify 7 options are displayed$/, async function() {
//     const churchChairsMenu = await $$('//a[@href="/church-chairs/"]/following-sibling::div//li//a');
//     expect(churchChairsMenu.length, 'Church chairs menu list count is not as expected').to.equal(7);
//     browser.pause(2000)
// });
Then(/^I verify 7 options are displayed$/, async function() {
    await CRE1.verifyNumberOfOptionsDisplayed();
});