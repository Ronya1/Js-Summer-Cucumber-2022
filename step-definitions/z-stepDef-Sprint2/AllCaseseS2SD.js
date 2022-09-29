const { Given, Then, When } = require("@wdio/cucumber-framework");
const moment = require("moment");
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

When(/^I Go to current month if not displayed$/, async function() {
    let dateBackButton = await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]`)
    await dateBackButton.click()
    await browser.pause(1000)
}); 

Then(/^I Verify For current month Past dates if any are disabled.$/, async function() {


}); 

Then(/^I Verify Back button on current month is disabled$/, async function() {
    let dateBackButton = await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/button[1]`)
    let isBAckButtonEnabled = await dateBackButton.isEnabled()
    await browser.pause(1000)
    expect(isBAckButtonEnabled, 'Error Message is Not Displayed1').to.be.false 
}); 



//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//TC-29

// Given(/^I am on Hotels.com home page020202$/, async function() {
//     await browser.url('https://www.hotels.com/');
//     await browser.pause(1000)
// }); 

When(/^I Click on “List your property”$/, async function() {
    let listYourPropertyLocator = await $(`//a[@id="listYourProperty"]`)
    await listYourPropertyLocator.click() 
    await browser.pause(1000)

    const allHandles = await browser.getWindowHandles();
    console.log(`NNNNN ${allHandles}`);
    expect(allHandles.length, 'Feedback should have opened a new window').to.equal(2);

    const hotelsTitle = await browser.getTitle()
    console.log(`NNNNN ${hotelsTitle}`);
    const expHotelsTitle = 'Hotels.com - Deals & Discounts for Hotel Reservations from Luxury Hotels to Budget Accommodations';

    const hotelsHandle = await browser.getWindowHandle(); 
    console.log(`PPPP ${hotelsHandle}`);

    for (const handle of allHandles) { // allHandles = [h1, h2]
        if (handle != hotelsHandle) {
        await browser.switchToWindow(handle);
        }
    }
    let testHandle = await browser.getTitle()
    console.log(`DIDITSWITCH? ${testHandle}`);
}); 

Then(/^I Verify “What would you like to list” is displayed"$/, async function() {
    let whatYouWouldLikeToListLocator = await $(`//p[text()="What would you like to list?"]`)
    let isItDisplayed = await whatYouWouldLikeToListLocator.isDisplayed() 
    await browser.pause(1000)
    // console.log(`AAAAA ${isItDisplayed}`);
    await browser.pause(1000)
    expect(isItDisplayed, 'Correct Message is Displayed').to.be.true 
}); 

Then(/^I Verify “Lodging“ and “Private residence“ options are displayed$/, async function() {
    let lodgingLocatorOption = await $(`//p[text()="Lodging"]`)
    let privateResidenceOption = await $(`//p[text()="Private residence"]`)
    let islodgingLocatorOptionDisplayed = await lodgingLocatorOption.isDisplayed() 
    let isprivateResidenceOptionDisplayed = await privateResidenceOption.isDisplayed() 
    await browser.pause(1000)
    console.log(`AAAAA ${islodgingLocatorOptionDisplayed}`);
    console.log(`BBBB ${isprivateResidenceOptionDisplayed}`);
    await browser.pause(1000)
    expect(islodgingLocatorOptionDisplayed, 'Correct Message is Displayed').to.be.true 
    expect(isprivateResidenceOptionDisplayed, 'Correct Message is Displayed').to.be.true 
}); 


When(/^I Click on “Private residence“$/, async function() {
    let privateResidenceOption = await $(`//p[text()="Private residence"]`)
    await privateResidenceOption.click()
    await browser.pause(1000)
}); 

Then(/^I Verify ”Step 1 of 3” is displayed$/, async function() {
    let step1Of3Locator = await $(`//div[text()="Step 1 of 3"]`)
    let result = await step1Of3Locator.isDisplayed()
    await browser.pause(1000)
    expect(result, 'Correct Message is Displayed').to.be.true 
}); 

Then(/^I Verify “See how much you could earn!” is displayed$/, async function() {
    let seeHowMuchYouCanEarnLocator = await $(`//h1[text()="See how much you could earn!"]`)
    let result = await seeHowMuchYouCanEarnLocator.isDisplayed()
    await browser.pause(1000)
    expect(result, 'Correct Message is Displayed').to.be.true 
}); 

Then(/^I Enter “4“ as bedroom and Enter “2.5“ as bathroom$/, async function() {
    let bedroomPlusButton = await $(`//button[@aria-label="Increase bedrooms"]`)
    await bedroomPlusButton.click()
    await bedroomPlusButton.click()
    await bedroomPlusButton.click()
    await bedroomPlusButton.click()
    let bathroomPlusButton = await $(`//button[@aria-label="Increase bathrooms"]`)
    await bathroomPlusButton.click()
    await bathroomPlusButton.click()
    await bathroomPlusButton.click()
    await browser.pause(1000)
}); 




//     When I Enter “4“ as bedroom and Enter “2.5“ as bathroom
//     And I Click on “Next” button
//     Then I Verify ”Step 2 of 3” is displayed
//     And I Verify “Where is your property located?” is displayed
//     When I Enter “121” in address
//     And I Select “1211 6th Avenue, New York, NY, USA” from auto-suggestion
//     Then I Verify graph is displayed
//     And I Verify pin in graph is displayed
//     And I Verify “Pin location may not be exact.“ is displayed below graph