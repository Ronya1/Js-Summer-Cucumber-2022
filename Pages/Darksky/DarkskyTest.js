const { expect } = require("chai");

class DarkskyTest {

    todaysButton = $('//div[@id="week"]')
    plusButton = $('//a[@data-day="0"]')
    topWeatherLow1 = $('//a[@data-day="0"]//span[@class="minTemp"]')
    bottomWeatherLow1 = $('//div[@class="dayDetails revealed"]//div[@class="summary_container"]//span[@class="highTemp swip"]//span[@class="temp"]')
    topWeatherHigh1 = $('//a[@data-day="0"]//span[@class="maxTemp"]')
    bottomWeatherHigh1 = $('//div[@class="dayDetails revealed"]//div[@class="summary_container"]//span[@class="lowTemp swap"]//span[@class="temp"]')



    async scrollToToday() {
        await this.todaysButton.scrollIntoView()
        await browser.pause(3000)
    }

    async clickPlusButton() {
        await this.plusButton.click()
        await browser.pause(3000)
    }

    async verifyMinTemp() {
        let topWeatherLow = await this.topWeatherLow1.getText()
        console.log(`AAAA ${topWeatherLow}`);
        let bottomWeatherLow = await this.bottomWeatherLow1.getText()
        expect(topWeatherLow, 'temp not matching').to.equal(bottomWeatherLow)
    }

    async verifyMaxTemp() {
        let TopWeatherHigh = await this.topWeatherHigh1.getText()
        let bottomWeatherHigh = await this.bottomWeatherHigh1.getText()
        expect(TopWeatherHigh, 'temp not matching').to.equal(bottomWeatherHigh)
    }




}
module.exports = DarkskyTest;