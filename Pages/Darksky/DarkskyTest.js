const { expect } = require("chai");

class DarkskyTest {

    todaysButton = $('//div[@id="week"]')


    async scrollToToday() {
        await this.todaysButton.scrollIntoView()
        await browser.pause(3000)
    }




    



}
module.exports = DarkskyTest;