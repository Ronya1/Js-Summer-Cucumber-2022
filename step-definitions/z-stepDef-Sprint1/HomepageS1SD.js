const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const HomepageS1Test = require("../../Pages/Z-Pages-Sprint1/HomepageS1Test");
const HHOMEPAGE = new HomepageS1Test();


//TC-18
Given(/^I am on Hotels.com home page0211$/, async function() {
    await browser.url('https://www.hotels.com/');
    await browser.pause(500)

});

When(/^I Click on Travelers$/, async function() { 
    await HHOMEPAGE.clickTravelersDropDown()
});

When(/^I Select “Adults" as 6$/, async function() { 
    await HHOMEPAGE.selectAdultTravelers()
    await HHOMEPAGE.selectAdultTravelers()
    await HHOMEPAGE.selectAdultTravelers()
    await HHOMEPAGE.selectAdultTravelers()
});

When(/^I Select “Children” as 3$/, async function() { 
    await HHOMEPAGE.selectChildrenTravelers()
    await HHOMEPAGE.selectChildrenTravelers()
    await HHOMEPAGE.selectChildrenTravelers()
});

When(/^I Select first child age: 4$/, async function() { 
    await HHOMEPAGE.selectFirstChildsAge()
});

When(/^I Select second child age: Under 1$/, async function() { 
    await HHOMEPAGE.selectSecondChildsAge()
});

When(/^I Select third child age: 7$/, async function() { 
    await HHOMEPAGE.selectThirdChildsAge()
});

When(/^I Click Done$/, async function() { 
    await HHOMEPAGE.clickDoneButton()
});

Then(/^I Verify total number of guests in sum of adults and children as same as selected on step #3 and #4.$/, async function() { 
    let numberDisplayed = await $(`//button[@class="uitk-menu-trigger uitk-fake-input uitk-form-field-trigger"]`).getText()
    //let numberDisplayed = await $(`//span[contains(text(),'Travelers:')]`).getText()
    //let travelerLocator = await $(`//input[@value="9 travelers, 1 room"]`)
    console.log(`AAAAAA ${numberDisplayed}`);
    await browser.pause(1000)
});
//tagName[not(@attrName='value')]
// Then I Verify total number of guests in sum of adults and children as same as selected on step #3 and #4.
//input[@value="9 travelers, 1 room"]

//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//TC-20

When(/^I Click Sign in link$/, async function() { 
    await HHOMEPAGE.clickSignInLink()
});

When(/^I Click Sign up link$/, async function() { 
    await HHOMEPAGE.clickSignUpLink()
});

When(/^I Click “Terms and Conditions” link$/, async function() { 
    await HHOMEPAGE.clickTermsAndConditionsLink()
});

Then(/^I Verify “Terms and Conditions” page opens in new tab$/, async function() { 
    await HHOMEPAGE.verifyTermsAndConditionsOpensInNewPage()
});

When(/^I Click “Privacy Statement” link$/, async function() { 
    await HHOMEPAGE.clickPrivacySTMNTLink()
});

Then(/^I Verify “Privacy Statement” page opens in new tab$/, async function() { 
    await HHOMEPAGE.verifyPrivacyStatementOpensInNewPage()
});


//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//TC-28

When(/^I Select “Children” as 2$/, async function() { 
    await HHOMEPAGE.selectChildrenTravelers()
    await HHOMEPAGE.selectChildrenTravelers()
});

Then(/^I Verify Children-age dropdown are 2$/, async function() { 
    await HHOMEPAGE.verifyChildrenAged2ropdown()
});

Then(/^I Verify Plus-button is enabled$/, async function() { 
    await HHOMEPAGE.verifyPlusButtonIsEnabled()
});

Then(/^I Verify minus-button is enabled$/, async function() { 
    await HHOMEPAGE.verifyMinusButtonIsEnabled()
});

When(/^I Select “Children” as 6$/, async function() { 
    await HHOMEPAGE.selectChildrenTravelers()
    await HHOMEPAGE.selectChildrenTravelers()
    await HHOMEPAGE.selectChildrenTravelers()
    await HHOMEPAGE.selectChildrenTravelers()
    await browser.pause(1000)
});

Then(/^I Verify Children-age dropdown are 6$/, async function() { 
    await HHOMEPAGE.verifyChildrenAged6ropdown()
});

Then(/^I Verify Plus button is disabled$/, async function() { 
    await HHOMEPAGE.verifyPlusButtonIsDisabled()
});

Then(/^I Verify minus-button is enabled02$/, async function() { 
    await HHOMEPAGE.verifyMinusButtonIsEnabled()
});

When(/^I Select “Children” as 5$/, async function() { 
    await HHOMEPAGE.reduceNumberOfChildrenby1()
});

Then(/^I Verify Children-age dropdown are 5$/, async function() { 
    await HHOMEPAGE.verifyChildrenAged5ropdown()
}); 

Then(/^I Verify Plus button is enabled$/, async function() { 
    await HHOMEPAGE.verifyPlusButtonIsEnabled()
});

Then(/^I Verify minus-button is enabled03$/, async function() { 
    await HHOMEPAGE.verifyMinusButtonIsEnabled()
});

When(/^I Select “Children” as 0$/, async function() { 
    await HHOMEPAGE.reduceNumberOfChildrenby1()
    await HHOMEPAGE.reduceNumberOfChildrenby1()
    await HHOMEPAGE.reduceNumberOfChildrenby1()
    await HHOMEPAGE.reduceNumberOfChildrenby1()
    await HHOMEPAGE.reduceNumberOfChildrenby1()
});

Then(/^I Verify Children-age dropdown is NOT displayed$/, async function() { 
    await HHOMEPAGE.verifyChildrenDropdownNotDisplyed()
});

Then(/^I Verify Plus button is enabled02$/, async function() { 
    await HHOMEPAGE.verifyPlusButtonIsEnabled()
});

Then(/^I Verify minus-button is disabled04$/, async function() { 
    await HHOMEPAGE.verifyMinusButtonIsDisabled()
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

    let isContinueEnabled = await $(`//button[@id="signupFormSubmitButton"]`).isEnabled()
    // await errorMessageLocator.isDisplayed()
    await browser.pause(500)
    console.log(`SSSSSSS ${isContinueEnabled}`);

    expect(isCheckDisplayed, 'Error Message is Not Displayed').to.be.true

    expect(isCheckDisplayed, 'Error Message is Not Displayed').to.be.true
    // await submitButton.click()
});















//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//TC-24

// Given(/^I am on Hotels.com home page0211$/, async function() {
//     await browser.url('https://www.hotels.com/');
//     await browser.pause(2000)
// }); // May not need this one as its already defined above and may throw an error 

// When(/^I Click Sign in link$/, async function() { 
//     await $(`//button[text()="Sign in"]`).click()
//     await browser.pause(1000)
// });// May not need this one as its already defined above and may throw an error 

When(/^I Click “Feedback” And Open PAge In New Tab$/, async function() { 
    let feedbackLocator = await $(`//a[text()="Feedback"]`) // located feedback
    await feedbackLocator.click() // clicks feedback and opens in new window
    await browser.pause(2000)

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

When(/^I Click on Submit button02$/, async function() { 
    let feedBackSubmitButton = await $(`//button[@id="submit-button"]`) // located feedback
    await feedBackSubmitButton.scrollIntoView()
    await browser.pause(2000)
    await feedBackSubmitButton.click()
    await browser.pause(2000)
});

Then(/^I Verify error message is displayed "Please fill in the required information highlighted below."$/, async function() { 
    let isErrorDisplayed = await $(`//p[text()="Please fill in the required information highlighted below."]`).isDisplayed()
    let errorMessage = await $(`//p[text()="Please fill in the required information highlighted below."]`).getText()
    console.log(`DOESITDISPLAY? ${errorMessage}`);

    expect(isErrorDisplayed, 'Error Message is Not Displayed').to.be.true
});

Then(/^I Verify star boxes section is in a red dotted box.$/, async function() { 
    let isDottedBox = await $(`//fieldset[@style="padding: 5px; border: 2px dotted rgb(204, 0, 0);"]`).isDisplayed()
    console.log(`DOESITDISPLAY2? ${isDottedBox}`);

    expect(isDottedBox, 'Error Message is Not Displayed').to.be.true
});


//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//TC-25


// Given(/^I am on Hotels.com home page0211$/, async function() {
//     await browser.url('https://www.hotels.com/');
//     await browser.pause(2000)
// }); // May not need this one as its already defined above and may throw an error 

// When(/^I Click Sign in link$/, async function() { 
//     await $(`//button[text()="Sign in"]`).click()
//     await browser.pause(1000)
// });// May not need this one as its already defined above and may throw an error 

// When(/^I Click “Feedback” And Open PAge In New Tab$/, async function() { 
//     let feedbackLocator = await $(`//a[text()="Feedback"]`) // located feedback
//     await feedbackLocator.click() // clicks feedback and opens in new window
//     await browser.pause(2000)

//     const allHandles = await browser.getWindowHandles();
//     console.log(`NNNNN ${allHandles}`);
//     expect(allHandles.length, 'Feedback should have opened a new window').to.equal(2);

//     const hotelsTitle = await browser.getTitle()
//     console.log(`NNNNN ${hotelsTitle}`);
//     const expHotelsTitle = 'Hotels.com - Deals & Discounts for Hotel Reservations from Luxury Hotels to Budget Accommodations';

//     const hotelsHandle = await browser.getWindowHandle(); 
//     console.log(`PPPP ${hotelsHandle}`);

//     for (const handle of allHandles) { // allHandles = [h1, h2]
//         if (handle != hotelsHandle) {
//         await browser.switchToWindow(handle);
//         }
//     }
//     let testHandle = await browser.getTitle()
//     console.log(`DIDITSWITCH? ${testHandle}`);
// });

When(/^I Select any star-rating$/, async function() { 
    let starRatingButton = await $(`//label[@for="page-rating-5"]`) // located feedback
    await browser.pause(2000)
    await starRatingButton.click()
    await browser.pause(2000)
});

When(/^I Enter any comments$/, async function() { 
    let commentSectionLocator = await $(`//textarea[@id="verbatim"]`) // located feedback
    await browser.pause(1000)
    await commentSectionLocator.click()
    await browser.pause(1000)
    await commentSectionLocator.setValue('Hello How Are You?')
    await browser.pause(1000)
});

When(/^I Select any option for “How likely are you to return to Hotels.com”$/, async function() { 
    let howLikelyLocator = await $(`//select[@id="will-you-return"]`) // located feedback
    await browser.pause(1000)
    await howLikelyLocator.click()
    await browser.pause(1000)
    let highlyLikelySelection = await $(`//option[text()="Highly likely"]`)
    await highlyLikelySelection.click()
    await browser.pause(1000)
});

When(/^I Select any answer for “Prior to this visit, have you ever booked on Hotels.com”$/, async function() { 
    let feedBackSubmitButton = await $(`//button[@id="submit-button"]`) // located feedback
    await feedBackSubmitButton.scrollIntoView()
    await browser.pause(1000)

    let priorToLocatorOptionYes = await $(`//label[@for="booked-here-before-yes"]`) // located feedback
    await browser.pause(1000)
    //await priorToLocatorOptionYes.scrollIntoView()
    await priorToLocatorOptionYes.click()
    await browser.pause(1000)
});

When(/^I Select any answer for ”Did you accomplish what you wanted to do on this page”$/, async function() { 
    let feedBackSubmitButton = await $(`//button[@id="submit-button"]`) // located feedback
    await feedBackSubmitButton.scrollIntoView()
    await browser.pause(1000)

    let didYouAccomplishLocatorOptionYes = await $(`//label[@for="were-you-successful-yes"]`) // located feedback
    await browser.pause(1000)
    await didYouAccomplishLocatorOptionYes.click()
});


When(/^I Click on Submit button03$/, async function() { 
    let feedBackSubmitButton = await $(`//button[@id="submit-button"]`) // located feedback
    await feedBackSubmitButton.scrollIntoView()  
    await browser.pause(1000)
    await feedBackSubmitButton.click()
    await browser.pause(5000)
});

Then(/^I Verify “THANK YOU FOR YOUR FEEDBACK.“ is displayed$/, async function() { 
    let isConfirmationDisplayed= await $(`//h5[text()="THANK YOU FOR YOUR FEEDBACK."]`).isDisplayed()
    let confMessage = await $(`//h5[text()="THANK YOU FOR YOUR FEEDBACK."]`).getText()
    console.log(`DOESITDISPLAY? ${confMessage}`);

    expect(isConfirmationDisplayed, 'Error Message is Not Displayed').to.be.true
});




//BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB