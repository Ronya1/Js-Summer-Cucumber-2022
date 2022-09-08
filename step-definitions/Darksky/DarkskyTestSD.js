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
    const now = moment().format('a')
    let counter = moment(now).add(2, 'hours')

    for (let i = 0 ; i < allHours.length ; i++){
        console.log(`BBBBBBB ` + allHours[i].getText());
        let currentHour = allHours[i].getText()
        //currentHour.substr(0,2)
        console.log('DDDDDDD' + currentHour);
       // expect(currentHour,'Not equal').to.eql(counter)
       expect(currentHour==counter, "fail the testcase").to.be.true;
        counter = moment(counter).add(2, 'hours')
        console.log('DDDDDDD' + currentHour);
        //allHours[i] == timeNow+2
    }
    // let allHours2 = - await allHours.getText()
    //console.log(`AAAAA ${allHours}`);
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
    // await $('//div[@id="week"]').scrollIntoView()
    // await browser.pause(3000)
    await DST.scrollToToday()
});

Then(/^I Click on plus button$/, async function() {
    await $('//a[@data-day="0"]').click()
    await browser.pause(3000)
});

Then(/^I Verify minTemp on and in Today's timeline is same$/, async function() {
    let topWeatherLow = await $('//a[@data-day="0"]//span[@class="minTemp"]').getText()
    console.log(`AAAA ${topWeatherLow}`);
    let bottomWeatherLow = await $('//div[@class="dayDetails revealed"]//div[@class="summary_container"]//span[@class="highTemp swip"]//span[@class="temp"]').getText()
    expect(topWeatherLow, 'temp not matching').to.equal(bottomWeatherLow)
});

Then(/^I Verify maxTemp on and in Today's timeline is same$/, async function() {
    let TopWeatherHigh = await $('//a[@data-day="0"]//span[@class="maxTemp"]').getText()
    let bottomWeatherHigh = await $('//div[@class="dayDetails revealed"]//div[@class="summary_container"]//span[@class="lowTemp swap"]//span[@class="temp"]').getText()
    expect(TopWeatherHigh, 'temp not matching').to.equal(bottomWeatherHigh)

});


//div[@class="dayDetails revealed"]//div[@class="summary_container"]//span[@class="highTemp swip"]//span[@class="temp"]
