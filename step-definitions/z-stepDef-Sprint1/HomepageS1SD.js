const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");


// Given(/^I am on Hotels.com home page0211$/, async function () { 
//     await browser.url('https://www.hotels.com/')
//     browser.pause(2000)
// });


//TC-18
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
    let numberDisplayed = await $(`//button[@class="uitk-menu-trigger uitk-fake-input uitk-form-field-trigger"]`).getText()
    //let numberDisplayed = await $(`//span[contains(text(),'Travelers:')]`).getText()
    //let travelerLocator = await $(`//input[@value="9 travelers, 1 room"]`)

    console.log(`AAAAAA ${numberDisplayed}`);
    await browser.pause(3000)
});
//tagName[not(@attrName='value')]
// Then I Verify total number of guests in sum of adults and children as same as selected on step #3 and #4.
//input[@value="9 travelers, 1 room"]



//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//TC-20
// Given(/^I am on Hotels.com home page0211$/, async function() {
//     await browser.url('https://www.hotels.com/');
//     await browser.pause(2000)
// }); // May not need this one as its already defined above and may throw an error 

When(/^I Click Sign in link$/, async function() { 
    await $(`//button[text()="Sign in"]`).click()
    await browser.pause(1000)
});

When(/^I Click Sign up link$/, async function() { 
    await $(`//a[text()="Sign up, it’s free"]`).click()
    await browser.pause(1000)
});

When(/^I Click “Terms and Conditions” link$/, async function() { 
    await $(`//a[text()="Terms and Conditions"]`).click()
    await browser.pause(1000)
    // const allHandles = await browser.getWindowHandles();
    // //console.log(`BBBB ${allHandles}`);
    // await browser.pause(3000)
    // expect(allHandles.length, 'T&C should have opened a new window').to.equal(2);
});

Then(/^I Verify “Terms and Conditions” page opens in new tab$/, async function() { 
    const allHandles = await browser.getWindowHandles();
    //console.log(`BBBB ${allHandles}`);
    await browser.pause(1000)
    expect(allHandles.length, 'T&C should have opened a new window').to.equal(2);
});

When(/^I Click “Privacy Statement” link$/, async function() { 
    await $(`//a[text()="Privacy Statement"]`).click()
    await browser.pause(1000)
    // const allHandles = await browser.getWindowHandles();
    // //console.log(`BBBB ${allHandles}`);
    // await browser.pause(3000)
    // expect(allHandles.length, 'T&C should have opened a new window').to.equal(2);
});

Then(/^I Verify “Privacy Statement” page opens in new tab$/, async function() { 
    const allHandles = await browser.getWindowHandles();
    //console.log(`BBBB ${allHandles}`);
    await browser.pause(3000)
    expect(allHandles.length, 'Privacy Statement should have opened a new window').to.equal(3);
});

//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//TC-21

// Given(/^I am on Hotels.com home page0211$/, async function() {
//     await browser.url('https://www.hotels.com/');
//     await browser.pause(2000)
// }); // May not need this one as its already defined above and may throw an error 

// When(/^I Click Sign in link$/, async function() { 
//     await $(`//button[text()="Sign in"]`).click()
//     await browser.pause(1000)
// });// May not need this one as its already defined above and may throw an error 

When(/^I click Sign in$/, async function() { 
    await $(`//div[@class="heading-container"]//a[text()="Sign in"]`).click()
    await browser.pause(500)
});

When(/^I Enter invalid email address0211$/, async function() { 
    let emailInput = await $(`//input[@id="loginFormEmailInput"]`)
    await emailInput.setValue('Test123@Test.com')
    await browser.pause(500)
});

When(/^I Enter invalid password$/, async function() { 
    let PasswordInput = await $(`//input[@id="loginFormPasswordInput"]`)
    await PasswordInput.setValue('ABCD')
    await browser.pause(500)
});

When(/^I Click on Sign in button$/, async function() { 
    let submitButton = await $(`//button[@id="loginFormSubmitButton"]`)
    await submitButton.click()
    await browser.pause(5000)
});

Then(/^I Verify Verification message is displayed.$/, async function() { 
    let errorMessageLocator = await $(`//h3[@class="uitk-error-summary-heading"]`).isDisplayed()
    // await errorMessageLocator.isDisplayed()
    console.log(`FFFF ${errorMessageLocator}`);
    await browser.pause(1000)
    expect(errorMessageLocator, 'Privacy Statement should have opened a new window').to.be.true
    // await submitButton.click()
});

//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//TC-22

// Given(/^I am on Hotels.com home page0211$/, async function() {
//     await browser.url('https://www.hotels.com/');
//     await browser.pause(2000)
// }); // May not need this one as its already defined above and may throw an error 

// When(/^I Click Sign in link$/, async function() { 
//     await $(`//button[text()="Sign in"]`).click()
//     await browser.pause(1000)
// });// May not need this one as its already defined above and may throw an error 

When(/^I click Sign in$/, async function() { 
    await $(`//div[@class="heading-container"]//a[text()="Sign in"]`).click()
    await browser.pause(500)
});

// When(/^I Click Sign up link$/, async function() { 
//     await $(`//a[text()="Sign up, it’s free"]`).click()
//     await browser.pause(1000)
// });May not need this one as its already defined above and may throw an error 

When(/^I Enter invalid email address with at least @ symbol #!@###$/, async function() { 
    let emailInput = await $(`//input[@id="signupFormEmailInput"]`)
    await emailInput.setValue('#!@###')
    await $(`//input[@id="signupFormFirstNameInput"]`).click()
    await browser.pause(500)
});

Then(/^I Verify error is displayed Enter a valid email address$/, async function() { 
    let errorMessageLocator = await $(`//div[@id="signupFormEmailInput-error"]`).isDisplayed()
    // await errorMessageLocator.isDisplayed()
    await browser.pause(500)
    console.log(`QQQQ ${errorMessageLocator}`);
    expect(errorMessageLocator, 'Error Message is Not Displayed').to.be.true
    // await submitButton.click()
});

When(/^I Enter invalid first name !@$/, async function() { 
    let firstName = await $(`//input[@id="signupFormFirstNameInput"]`)
    await firstName.setValue('!@')
    await $(`//input[@id="signupFormLastNameInput"]`).click()
    await browser.pause(500)
});

Then(/^I Verify error is displayed First name cannot contain special characters$/, async function() { 
    let errorMessageLocator = await $(`//div[@id="signupFormFirstNameInput-error"]`).isDisplayed()
    // await errorMessageLocator.isDisplayed()
    await browser.pause(500)
    console.log(`TTTTT ${errorMessageLocator}`);
    expect(errorMessageLocator, 'Error Message is Not Displayed').to.be.true
    // await submitButton.click()
});

When(/^I Enter invalid last name %<&$/, async function() { 
    let lastName = await $(`//input[@id="signupFormLastNameInput"]`)
    await lastName.setValue('%^&')
    await $(`//input[@id="signupFormPasswordInput"]`).click()
    await browser.pause(500)
});

Then(/^I Verify error is displayed Last name cannot contain special characters$/, async function() { 
    let errorMessageLocator = await $(`//div[@id="signupFormLastNameInput-error"]`).isDisplayed()
    // await errorMessageLocator.isDisplayed()
    await browser.pause(500)
    console.log(`PPPPP ${errorMessageLocator}`);
    expect(errorMessageLocator, 'Error Message is Not Displayed').to.be.true
    // await submitButton.click()
});

When(/^I Enter password$/, async function() { 
    let lastName = await $(`//input[@id="signupFormPasswordInput"]`)
    await lastName.setValue('ABCD123')
    await $(`//input[@id="signupFormLastNameInput"]`).click()
    await browser.pause(500)
});

Then(/^I Verify “Keep me signed in” checkbox is displayed and enabled$/, async function() { 
    let isCheckDisplayed = await $(`//div[@class="uitk-layout-flex uitk-layout-flex-flex-wrap-nowrap uitk-switch uitk-checkbox"]`).isDisplayed()
    // await errorMessageLocator.isDisplayed()
    await browser.pause(500)
    console.log(`RRRRR ${isCheckDisplayed}`);

    let isContinueEnabled = await $(`///button[@id="signupFormSubmitButton"]`).isEnabled()
    // await errorMessageLocator.isDisplayed()
    await browser.pause(500)
    console.log(`SSSSSSS ${isContinueEnabled}`);

    expect(isContinueEnabled, 'Error Message is Not Displayed').to.be.true

    expect(isCheckDisplayed, 'Error Message is Not Displayed').to.be.true
    // await submitButton.click()
});

//div[@class="uitk-layout-flex uitk-layout-flex-flex-wrap-nowrap uitk-switch uitk-checkbox"]
//input[@id="signUpFormRememberMeCheck"]


// When(/^I Click on Sign in button$/, async function() { 
//     let submitButton = await $(`//button[@id="loginFormSubmitButton"]`)
//     await submitButton.click()
//     await browser.pause(5000)
// });

// Then(/^I Verify Verification message is displayed.$/, async function() { 
//     let errorMessageLocator = await $(`//h3[@class="uitk-error-summary-heading"]`).isDisplayed()
//     // await errorMessageLocator.isDisplayed()
//     console.log(`FFFF ${errorMessageLocator}`);
//     await browser.pause(1000)
//     expect(errorMessageLocator, 'Privacy Statement should have opened a new window').to.be.true
//     // await submitButton.click()
// });





/**
 *     Given I am on Hotels.com home page0211
    When I Click Sign in link
    And I Click Sign up link
    And I Enter invalid email address with at least '@' symbol (#!@###)
    Then I Verify error is displayed (Enter a valid email address)
    And I Enter invalid first name (!@)
    Then I Verify error is displayed (First name cannot contain special characters)
    And I Enter invalid last name (%^&)
    Then I Verify error is displayed (Last name cannot contain special characters)
    And I Enter password 

    Then I Verify “Keep me signed in” checkbox is displayed and enabled
    
    And I Verify “Continue” button is displayed but NOT enabled
 */