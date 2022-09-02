const { Given, Then, When } = require("@cucumber/cucumber");
const { expect } = require("chai");
const moment = require("moment");
const hwhotelsAllPages = require("../../Pages/Hotels/hw-hotelsAllPages")


// Scenario: Verify past dates of the current month is not enabled
// Given I am on Hotels landing page 
// When I click date drop down menu
// Then I verify past dates are not enabled


const hwHotel = new hwhotelsAllPages

Given(/^I am on Hotels landing page$/, async function() {
    await browser.url('https://www.hotels.com/');
    await browser.pause(2000)

});

When(/^I click date drop down menu$/, async function() {
    await hwHotel.clickDateSearchDropDown()
})

Then(/^I verify past dates are not enabled$/, async function() {
    await hwHotel.clickDateBackButton()//put in "when"
    let dateAndTimeNow = await moment()
    let formattedDateToday = await dateAndTimeNow.format('DD') 
    let thisREsult = await hotel.RrturnNumOfDisabledDates()
    expect( await thisREsult, 'Length of Disabled Dates is Off').to.equal(formattedDateToday-1)
})



 


// Scenario: Verify past dates of the current month is not enabled
// Given I am on Hotels landing page 
// When I typle in "man" in destination
// And I select "Manila" from auto-suggestion
// And I select tomorrow's date as check-in date 
// And I Select 5 days from check-in as check-out 
// And I Click Search button
// Then I Verify destination has Manila
// And I Verify check-in date is tomorrow's date
// And I Verify check-out date in 5-days from check-in date




// Given(/^I am on Hotels landing page$/, async function() {
//     await browser.url('https://www.hotels.com/')//move to the hw-hotelsAllPages.js
// })

When(/^I typle in "man" in destination And Select "Manila" from auto-suggestion$/, async function() {
    await hwHotel.enterDestination('Man')
})

// When(/^I select "Manila" from auto-suggestion$/, async function() {
// })
// When(/^I select tomorrow's date as check-in date$/, async function() {
// })
// When(/^I Select 5 days from check-in as check-out $/, async function() {
// })
// When(/^I Click Search button $/, async function() {
// })

Then(/^I select tomorrow's date as check-in date and I Select 5 days from check-in as check-out and Click Search button$/, async function() {
    await hwHotel.selectTravelDates()
})


// Then(/^I Verify destination has Manila $/, async function() {
// })
// Then(/^I Verify check-in date is tomorrow's date$/, async function() {
// })
// Then(/^I Verify check-out date in 5-days from check-in date$/, async function() {
// })

Then(/^I Verify destination has Manila And I Verify check-in date is tomorrow's date And I Verify check-out date in 5-days from check-in date$/, async function() {
    let isManilaPresent = await hwHotel.isCorrectLocationPresent()
    let isAug28Displayed = await hwHotel.isCorrectstartDatePresent()
    let isSep1Displayed = await hwHotel.isCorrectstartDatePresent()
    expect(await isManilaPresent, 'Manila is not present').to.be.true 
    expect(await isAug28Displayed, 'Aug 20 is not present').to.be.true
    expect(await isSep1Displayed, 'Sep 5 is not present').to.be.true
})



