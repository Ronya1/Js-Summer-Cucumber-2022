const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const moment = require("moment");
const DarkskyTest = require("../../Pages/Darksky/DarkskyTest");
const DST = new DarkskyTest();






Given(/^I am on darksky.net123$/, async function() {
    await browser.url('https://darksky.net/');
    await browser.pause(3000)
});

Then(/^I Verify timeline has 12-data points with 2 hours gap from current hour$/, async function() {
    let allHours = await $$('//div[@class="hours"][1]/span/following-sibling::span[1]/span')
    const now = moment().format('h')
    let compareArr =[] //to add moment comparison values later, since moment messes up the counter
    let startdate = moment(now);
    let counter = moment(startdate).add(1, 'hours').format('h')
    console.log('AAAAAAAAAAA' + now);

    for (let i = 0 ; i < allHours.length ; i++){
        let currentHour = await allHours[i].getText()
        console.log('DDDDDDD' + counter);
       expect(currentHour, 'temp not matching').to.include(counter)
        counter = moment(counter).add(3, 'hours').format('h')
        console.log('FFFFFFF' + counter);
    }
});



// Scenario: Verify DarkSky 2 Hour Gaps 
// Given I am on darksky.net123
// Then Verify timeline has 12-data points with 2 hours gap from current hour



// Scenario: Verify DarkSky 2 Hour Gaps 
// Given I am on darksky.net1234
// When I Scroll to Today's timeline
// And I Click on + button
// Then I Verify minTemp on and in Today's timeline is same 
// Then I Verify maxTemp on and in Today's timeline is same

Given(/^I am on darksky.net1234$/, async function() {
    await browser.url('https://darksky.net/');
    await browser.pause(5000)
});

When(/^I Scroll to Today's timeline$/, async function() {
    await DST.scrollToToday()
});

Then(/^I Click on plus button$/, async function() {
    await DST.clickPlusButton()
});

Then(/^I Verify minTemp on and in Today's timeline is same$/, async function() {
    await DST.verifyMinTemp()

});

Then(/^I Verify maxTemp on and in Today's timeline is same$/, async function() {
    await DST.verifyMaxTemp()
});


//div[@class="dayDetails revealed"]//div[@class="summary_container"]//span[@class="highTemp swip"]//span[@class="temp"]
