const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
// const HomepageS1Test = require("../../Pages/Z-Pages-Sprint1/HomepageS1Test");
// const HHOMEPAGE = new HomepageS1Test();

//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
//TC-24

Given(/^I am on Hotels.com home page0222$/, async function() {
    await browser.url('https://www.hotels.com/');
    await browser.pause(1000)
}); // May not need this one as its already defined above and may throw an error 

When(/^I Click Sign in link01$/, async function() { 
    await $(`//button[text()="Sign in"]`).click()
    await browser.pause(1000)
});// May not need this one as its already defined above and may throw an error 

When(/^I Click “Feedback” And Open PAge In New Tab02$/, async function() { 
    let feedbackLocator = await $(`//a[text()="Feedback"]`) // located feedback
    await feedbackLocator.click() // clicks feedback and opens in new window
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

When(/^I Click on Submit button04$/, async function() { 
    let feedBackSubmitButton = await $(`//button[@id="submit-button"]`) // located feedback
    await feedBackSubmitButton.scrollIntoView()
    await browser.pause(1000)
    await feedBackSubmitButton.click()
    await browser.pause(1000)
});

Then(/^I Verify error message is displayed 01 "Please fill in the required information highlighted below."$/, async function() { 
    let isErrorDisplayed = await $(`//p[text()="Please fill in the required information highlighted below."]`).isDisplayed()
    let errorMessage = await $(`//p[text()="Please fill in the required information highlighted below."]`).getText()
    console.log(`DOESITDISPLAY? ${errorMessage}`);

    expect(isErrorDisplayed, 'Error Message is Not Displayed').to.be.true
});

Then(/^I Verify star boxes section is in a red dotted box.02$/, async function() { 
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


When(/^I Click on Submit button05$/, async function() { 
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