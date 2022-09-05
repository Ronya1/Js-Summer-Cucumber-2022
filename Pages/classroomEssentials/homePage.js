const { expect } = require("chai");
class CREssentials{


//classroomEssentailsLander = https://classroomessentialsonline.com/
churchChairsMenuElement = $('//a[@href="/church-chairs/"]')
churchChairsMenu = $$('//a[@href="/church-chairs/"]/following-sibling::div//li//a')


// When(/^I move mouse on Church Chairs$/, async function() {
//     const churchChairsMenuElement = await $('//a[@href="/church-chairs/"]');
//     await churchChairsMenuElement.moveTo();
//     browser.pause(2000)
// });
async moveMouseOverElement(){
    const churchChairsMenuElement = await this.churchChairsMenuElement
    await churchChairsMenuElement.moveTo()
    browser.pause(5000)
}

// Then(/^I verify 7 options are displayed$/, async function() {
//     const churchChairsMenu = await $$('//a[@href="/church-chairs/"]/following-sibling::div//li//a');
//     expect(churchChairsMenu.length, 'Church chairs menu list count is not as expected').to.equal(7);
//     browser.pause(2000)
// });

async verifyNumberOfOptionsDisplayed(){
    const churchChairsMenu = await $$('//a[@href="/church-chairs/"]/following-sibling::div//li//a');
    expect(churchChairsMenu.length, 'Church chairs menu list count is not as expected').to.equal(7);
    browser.pause(5000)
}


}
module.exports = CREssentials;