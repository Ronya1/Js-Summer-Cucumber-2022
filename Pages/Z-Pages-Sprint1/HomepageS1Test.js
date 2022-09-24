const { expect } = require("chai");

class HomepageS1Test {

    travelersDropDownLocator = $(`//button[@class="uitk-menu-trigger uitk-fake-input uitk-form-field-trigger"]`)
    adultsPlusButtonLocator = $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/button[2]`)
    childrenPlusButtonLocator = $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[2]`)
    firstChildAgeDropDown = $(`//select[@id="age-traveler_selector_children_age_selector-0-0"]`)
    firstChildAgeDropDownOption4YRS = $(`//select[@id="age-traveler_selector_children_age_selector-0-0"]//option[@value="4"]`)
    secondChildAgeDropDown = $(`//select[@id="age-traveler_selector_children_age_selector-0-1"]`)
    secondChildAgeDropDownOptionUnder1 = $(`//select[@id="age-traveler_selector_children_age_selector-0-1"]//option[@value="0"]`)
    thirdChildAgeDropDown = $(`//select[@id="age-traveler_selector_children_age_selector-0-2"]`)
    thirdChildAgeDropDownOption7YRS = $(`//select[@id="age-traveler_selector_children_age_selector-0-2"]//option[@value="7"]`)
    travelersSectionDropDownDoneButton = $(`//button[text()="Done"]`)

    signInButtonLocator = $(`//button[text()="Sign in"]`)
    signUpLinkLocator = $(`//a[text()="Sign up, it’s free"]`)
    termsAndConditionsLink = $(`//a[text()="Terms and Conditions"]`)
    privacyStatementLink = $(`//a[text()="Privacy Statement"]`)
    minusButtonLocator = $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[1]`)
    fourthChildAgeDropDown = $(`//select[@id="age-traveler_selector_children_age_selector-0-3"]`)
    fifthChildAgeDropDown = $(`//select[@id="age-traveler_selector_children_age_selector-0-4"]`)
    sixthChildAgeDropDown = $(`//select[@id="age-traveler_selector_children_age_selector-0-5"]`)




    async clickTravelersDropDown() {
        await this.travelersDropDownLocator.click()
        await browser.pause(100)
    }


    async selectAdultTravelers() {
        await this.adultsPlusButtonLocator.click()
        await browser.pause(100)
    }

    async selectChildrenTravelers() {
        await this.childrenPlusButtonLocator.click()
        await browser.pause(100)
    }

    async selectFirstChildsAge() {
        await this.firstChildAgeDropDown.click()
        await this.firstChildAgeDropDownOption4YRS.click()
        await browser.pause(100)
    }

    async selectSecondChildsAge() {
        await this.secondChildAgeDropDown.click()
        await this.secondChildAgeDropDownOptionUnder1.click()
        await browser.pause(100)
    }

    async selectThirdChildsAge() {
        await this.thirdChildAgeDropDown.click()
        await this.thirdChildAgeDropDownOption7YRS.click()
        await browser.pause(100)
    }

    async clickDoneButton() {
        await this.travelersSectionDropDownDoneButton.click()
        await browser.pause(100)
    }

    async clickSignInLink() {
        await this.signInButtonLocator.click()
        await browser.pause(100)
    }

    async clickSignUpLink() {
        await this.signUpLinkLocator.click()
        await browser.pause(100)
    }

    async clickTermsAndConditionsLink() {
        await this.termsAndConditionsLink.click()
        await browser.pause(100)
    }

    async verifyTermsAndConditionsOpensInNewPage() {
        const allHandles = await browser.getWindowHandles();
        //console.log(`BBBB ${allHandles}`);
        await browser.pause(1000)
        expect(allHandles.length, 'T&C should have opened a new window').to.equal(2);
    }

    async clickPrivacySTMNTLink() {
        await this.privacyStatementLink.click()
        await browser.pause(100)
    }

    async verifyPrivacyStatementOpensInNewPage() {
        const allHandles = await browser.getWindowHandles();
        //console.log(`BBBB ${allHandles}`);
        await browser.pause(1000)
        expect(allHandles.length, 'Privacy Statement should have opened a new window').to.equal(3);
    }

    async verifyChildrenAged2ropdown() {
        let is1stChildDropDownDisplayed= await this.firstChildAgeDropDown.isEnabled()
        console.log(`ISITDISPLAYED1? ${is1stChildDropDownDisplayed}`);
        expect(is1stChildDropDownDisplayed, 'Child 1 Is Not Displayed').to.be.true
        await browser.pause(1000)
    
        let is2ndChildDropDownDisplayed= await this.secondChildAgeDropDown.isEnabled()
        console.log(`ISITDISPLAYED2? ${is2ndChildDropDownDisplayed}`);
        expect(is1stChildDropDownDisplayed, 'Child 2 Is Not Displayed').to.be.true
        await browser.pause(1000)
    }

    async verifyPlusButtonIsEnabled() {
        let plusButtonLocator = await this.childrenPlusButtonLocator
        let plusButtonEnabled = await plusButtonLocator.isEnabled()
        console.log(`ISITWorking? ${plusButtonEnabled}`);
        expect(plusButtonEnabled, 'Plus Button Is Not Enabled').to.be.true
        await browser.pause(1000)
    }

    async verifyMinusButtonIsEnabled() {
        let minusButtonLocator = await this.minusButtonLocator
        let minusButtonEnabled = await minusButtonLocator.isEnabled()
        console.log(`ISITWorking? ${minusButtonEnabled}`);
        expect(minusButtonEnabled, 'Minus Button Is Not Enabled').to.be.true
        await browser.pause(1000)
    }

    async verifyChildrenAged6ropdown() {
        let is1stChildDropDownDisplayed= await this.firstChildAgeDropDown.isEnabled()
        console.log(`ISITDISPLAYED1? ${is1stChildDropDownDisplayed}`);
        expect(is1stChildDropDownDisplayed, 'Child 1 Is Not Displayed').to.be.true
        await browser.pause(1000)
    
        let is2ndChildDropDownDisplayed= await this.secondChildAgeDropDown.isEnabled()
        console.log(`ISITDISPLAYED2? ${is2ndChildDropDownDisplayed}`);
        expect(is1stChildDropDownDisplayed, 'Child 2 Is Not Displayed').to.be.true
        await browser.pause(1000)

        let is3rdChildDropDownDisplayed= await this.thirdChildAgeDropDown.isEnabled()
        console.log(`THREE? ${is3rdChildDropDownDisplayed}`);
        expect(is3rdChildDropDownDisplayed, 'Child 3 Is Not Displayed').to.be.true
        await browser.pause(1000)
    
        let is4thChildDropDownDisplayed= await this.fourthChildAgeDropDown.isEnabled() 
        console.log(`FOUR? ${is4thChildDropDownDisplayed}`);
        expect(is4thChildDropDownDisplayed, 'Child 4 Is Not Displayed').to.be.true
        await browser.pause(1000)
    
        let is5thChildDropDownDisplayed= await this.fifthChildAgeDropDown.isEnabled() 
        console.log(`Five? ${is5thChildDropDownDisplayed}`);
        expect(is5thChildDropDownDisplayed, 'Child 5 Is Not Displayed').to.be.true
        await browser.pause(1000)
    
        let is6thChildDropDownDisplayed= await this.sixthChildAgeDropDown.isEnabled() 
        console.log(`six? ${is6thChildDropDownDisplayed}`);
        expect(is6thChildDropDownDisplayed, 'Child 6 Is Not Displayed').to.be.true
        await browser.pause(1000)
    }

    async verifyPlusButtonIsDisabled() {
        let plusButtonLocator = await this.childrenPlusButtonLocator
        let plusButtonEnabled = await plusButtonLocator.isEnabled()
        console.log(`TRTRTRTRTRT? ${plusButtonEnabled}`);
        expect(plusButtonEnabled, 'Plus Button Is Not Enabled').to.be.false
        await browser.pause(1000)
    }

    async reduceNumberOfChildrenby1() {
        await this.minusButtonLocator.click()
        await browser.pause(1000)
    }

    async verifyChildrenAged5ropdown() {
        let is1stChildDropDownDisplayed= await this.firstChildAgeDropDown.isEnabled()
        console.log(`ISITDISPLAYED1? ${is1stChildDropDownDisplayed}`);
        expect(is1stChildDropDownDisplayed, 'Child 1 Is Not Displayed').to.be.true
        await browser.pause(1000)
    
        let is2ndChildDropDownDisplayed= await this.secondChildAgeDropDown.isEnabled()
        console.log(`ISITDISPLAYED2? ${is2ndChildDropDownDisplayed}`);
        expect(is1stChildDropDownDisplayed, 'Child 2 Is Not Displayed').to.be.true
        await browser.pause(1000)

        let is3rdChildDropDownDisplayed= await this.thirdChildAgeDropDown.isEnabled()
        console.log(`THREE? ${is3rdChildDropDownDisplayed}`);
        expect(is3rdChildDropDownDisplayed, 'Child 3 Is Not Displayed').to.be.true
        await browser.pause(1000)
    
        let is4thChildDropDownDisplayed= await this.fourthChildAgeDropDown.isEnabled() 
        console.log(`FOUR? ${is4thChildDropDownDisplayed}`);
        expect(is4thChildDropDownDisplayed, 'Child 4 Is Not Displayed').to.be.true
        await browser.pause(1000)
    
        let is5thChildDropDownDisplayed= await this.fifthChildAgeDropDown.isEnabled() 
        console.log(`Five? ${is5thChildDropDownDisplayed}`);
        expect(is5thChildDropDownDisplayed, 'Child 5 Is Not Displayed').to.be.true
        await browser.pause(1000)
    }

    async verifyChildrenDropdownNotDisplyed() {
        let is1stChildDropDownDisplayed= await this.firstChildAgeDropDown.isDisplayed()
        console.log(`ISITDISPLAYED1? ${is1stChildDropDownDisplayed}`);
        expect(is1stChildDropDownDisplayed, 'Child 1 Is Not Displayed').to.be.false
        await browser.pause(1000)
    }

    async verifyMinusButtonIsDisabled() {
        let minusButtonLocator = await this.minusButtonLocator
        let minusButtonEnabled = await minusButtonLocator.isEnabled()
        console.log(`ISITWorking? ${minusButtonEnabled}`);
        expect(minusButtonEnabled, 'Minus Button Is Not Enabled').to.be.false
        await browser.pause(1000)
    }






    // Then(/^I Verify Children-age dropdown is NOT displayed$/, async function() { 
    //     let is1stChildDropDownDisplayed= await $(`//select[@id="age-traveler_selector_children_age_selector-0-0"]`).isDisplayed()
    //     console.log(`SDFSDF? ${is1stChildDropDownDisplayed}`);
    //     expect(is1stChildDropDownDisplayed, 'Child 1 Is Not Displayed').to.be.false
    //     await browser.pause(1000)
    // });





























//ORIGINAL CODE ORIGINAL CODE ORIGINAL CODE ORIGINAL CODE ORIGINAL CODE ORIGINAL CODE ORIGINAL CODE ORIGINAL CODE ORIGINAL CODE 
    //TC-18
// Given(/^I am on Hotels.com home page0211$/, async function() {
//     await browser.url('https://www.hotels.com/');
//     await browser.pause(2000)

// });

// When(/^I Click on Travelers$/, async function() { 
//     //let thisLocator = await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[1]`).click()
//     //await thisLocator.click()
//     await $(`//button[@class="uitk-menu-trigger uitk-fake-input uitk-form-field-trigger"]`).click()
//     await browser.pause(1000)
// });



// When(/^I Select “Adults" as 6$/, async function() { 
//     await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/button[2]`).click()
//     await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/button[2]`).click()
//     await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/button[2]`).click()
//     await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[1]/div[1]/div[1]/button[2]`).click()
//     await browser.pause(1000)
// });


// When(/^I Select “Children” as 3$/, async function() { 
//     await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[2]`).click()
//     await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[2]`).click()
//     await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[2]`).click()
//     await browser.pause(1000)
// });

// When(/^I Select first child age: 4$/, async function() { 
//     await $(`//select[@id="age-traveler_selector_children_age_selector-0-0"]`).click()
//     await $(`//select[@id="age-traveler_selector_children_age_selector-0-0"]//option[@value="4"]`).click()
//     await browser.pause(1000)
// });

// When(/^I Select second child age: Under 1$/, async function() { 
//     await $(`//select[@id="age-traveler_selector_children_age_selector-0-1"]`).click()
//     await $(`//select[@id="age-traveler_selector_children_age_selector-0-1"]//option[@value="0"]`).click()
//     await browser.pause(1000)
// });

// When(/^I Select third child age: 7$/, async function() { 
//     await $(`//select[@id="age-traveler_selector_children_age_selector-0-2"]`).click()
//     await $(`//select[@id="age-traveler_selector_children_age_selector-0-2"]//option[@value="7"]`).click()
//     await browser.pause(1000)
// });

// When(/^I Click Done$/, async function() { 
//     await $(`//button[text()="Done"]`).click()
//     await browser.pause(3000)
// });

// Then(/^I Verify total number of guests in sum of adults and children as same as selected on step #3 and #4.$/, async function() { 
//     let numberDisplayed = await $(`//button[@class="uitk-menu-trigger uitk-fake-input uitk-form-field-trigger"]`).getText()
//     //let numberDisplayed = await $(`//span[contains(text(),'Travelers:')]`).getText()
//     //let travelerLocator = await $(`//input[@value="9 travelers, 1 room"]`)

//     console.log(`AAAAAA ${numberDisplayed}`);
//     await browser.pause(3000)
// });
// //tagName[not(@attrName='value')]
// // Then I Verify total number of guests in sum of adults and children as same as selected on step #3 and #4.
// //input[@value="9 travelers, 1 room"]



// //DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
// //DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
// //DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
// //TC-20
// // Given(/^I am on Hotels.com home page0211$/, async function() {
// //     await browser.url('https://www.hotels.com/');
// //     await browser.pause(2000)
// // }); // May not need this one as its already defined above and may throw an error 

// When(/^I Click Sign in link$/, async function() { 
//     await $(`//button[text()="Sign in"]`).click()
//     await browser.pause(1000)
// });

// When(/^I Click Sign up link$/, async function() { 
//     await $(`//a[text()="Sign up, it’s free"]`).click()
//     await browser.pause(1000)
// });

// When(/^I Click “Terms and Conditions” link$/, async function() { 
//     await $(`//a[text()="Terms and Conditions"]`).click()
//     await browser.pause(1000)
//     // const allHandles = await browser.getWindowHandles();
//     // //console.log(`BBBB ${allHandles}`);
//     // await browser.pause(3000)
//     // expect(allHandles.length, 'T&C should have opened a new window').to.equal(2);
// });

// Then(/^I Verify “Terms and Conditions” page opens in new tab$/, async function() { 
//     const allHandles = await browser.getWindowHandles();
//     //console.log(`BBBB ${allHandles}`);
//     await browser.pause(1000)
//     expect(allHandles.length, 'T&C should have opened a new window').to.equal(2);
// });

// When(/^I Click “Privacy Statement” link$/, async function() { 
//     await $(`//a[text()="Privacy Statement"]`).click()
//     await browser.pause(1000)
//     // const allHandles = await browser.getWindowHandles();
//     // //console.log(`BBBB ${allHandles}`);
//     // await browser.pause(3000)
//     // expect(allHandles.length, 'T&C should have opened a new window').to.equal(2);
// });

// Then(/^I Verify “Privacy Statement” page opens in new tab$/, async function() { 
//     const allHandles = await browser.getWindowHandles();
//     //console.log(`BBBB ${allHandles}`);
//     await browser.pause(3000)
//     expect(allHandles.length, 'Privacy Statement should have opened a new window').to.equal(3);
// });


// //DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
// //DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
// //DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
// //TC-28

// // Given(/^I am on Hotels.com home page0211$/, async function() {
// //     await browser.url('https://www.hotels.com/');
// //     await browser.pause(2000)

// // });

// // When(/^I Click on Travelers$/, async function() { 
// //     //let thisLocator = await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[1]`).click()
// //     //await thisLocator.click()
// //     await $(`//button[@class="uitk-menu-trigger uitk-fake-input uitk-form-field-trigger"]`).click()
// //     await browser.pause(1000)
// // });

// When(/^I Select “Children” as 2$/, async function() { 
//     await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[2]`).click()
//     await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[2]`).click()
//     await browser.pause(1000)
// });

// Then(/^I Verify Children-age dropdown are 2$/, async function() { 
//     let is1stChildDropDownDisplayed= await $(`//select[@id="age-traveler_selector_children_age_selector-0-0"]`).isEnabled()
//     console.log(`ISITDISPLAYED1? ${is1stChildDropDownDisplayed}`);
//     expect(is1stChildDropDownDisplayed, 'Child 1 Is Not Displayed').to.be.true
//     await browser.pause(1000)

//     let is2ndChildDropDownDisplayed= await $(`//select[@id="age-traveler_selector_children_age_selector-0-1"]`).isEnabled()
//     console.log(`ISITDISPLAYED2? ${is2ndChildDropDownDisplayed}`);
//     expect(is1stChildDropDownDisplayed, 'Child 1 Is Not Displayed').to.be.true
//     await browser.pause(1000)
// });

// Then(/^I Verify Plus-button is enabled$/, async function() { 
//     let plusButtonLocator = await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[2]`)
//     let plusButtonEnabled = await plusButtonLocator.isEnabled()
//     console.log(`ISITWorking? ${plusButtonEnabled}`);
//     expect(plusButtonEnabled, 'Plus Button Is Not Enabled').to.be.true
//     await browser.pause(1000)
// });

// Then(/^I Verify minus-button is enabled$/, async function() { 
//     let minusButtonLocator = await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[1]`)
//     let minusButtonEnabled = await minusButtonLocator.isEnabled()
//     console.log(`ISITWorking? ${minusButtonEnabled}`);
//     expect(minusButtonEnabled, 'Plus Button Is Not Enabled').to.be.true
//     await browser.pause(1000)
// });

// When(/^I Select “Children” as 6$/, async function() { 
//     await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[2]`).click()
//     await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[2]`).click()
//     await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[2]`).click()
//     await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[2]`).click()
//     await browser.pause(1000)
// });

// Then(/^I Verify Children-age dropdown are 6$/, async function() { 
//     let is1stChildDropDownDisplayed= await $(`//select[@id="age-traveler_selector_children_age_selector-0-0"]`).isEnabled()
//     console.log(`One? ${is1stChildDropDownDisplayed}`);
//     expect(is1stChildDropDownDisplayed, 'Child 1 Is Not Displayed').to.be.true
//     await browser.pause(1000)

//     let is2ndChildDropDownDisplayed= await $(`//select[@id="age-traveler_selector_children_age_selector-0-1"]`).isEnabled()
//     console.log(`TWO? ${is2ndChildDropDownDisplayed}`);
//     expect(is1stChildDropDownDisplayed, 'Child 1 Is Not Displayed').to.be.true
//     await browser.pause(1000)

//     let is3rdChildDropDownDisplayed= await $(`//select[@id="age-traveler_selector_children_age_selector-0-2"]`).isEnabled()
//     console.log(`THREE? ${is3rdChildDropDownDisplayed}`);
//     expect(is3rdChildDropDownDisplayed, 'Child 3 Is Not Displayed').to.be.true
//     await browser.pause(1000)

//     let is4thChildDropDownDisplayed= await $(`//select[@id="age-traveler_selector_children_age_selector-0-3"]`).isEnabled()
//     console.log(`FOUR? ${is4thChildDropDownDisplayed}`);
//     expect(is4thChildDropDownDisplayed, 'Child 1 Is Not Displayed').to.be.true
//     await browser.pause(1000)

//     let is5thChildDropDownDisplayed= await $(`//select[@id="age-traveler_selector_children_age_selector-0-4"]`).isEnabled()
//     console.log(`Five? ${is5thChildDropDownDisplayed}`);
//     expect(is5thChildDropDownDisplayed, 'Child 1 Is Not Displayed').to.be.true
//     await browser.pause(1000)

//     let is6thChildDropDownDisplayed= await $(`//select[@id="age-traveler_selector_children_age_selector-0-5"]`).isEnabled()
//     console.log(`six? ${is6thChildDropDownDisplayed}`);
//     expect(is6thChildDropDownDisplayed, 'Child 1 Is Not Displayed').to.be.true
//     await browser.pause(1000)
// });

// Then(/^I Verify Plus button is disabled$/, async function() { 
//     let plusButtonLocator = await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[2]`)
//     let plusButtonEnabled = await plusButtonLocator.isEnabled()
//     console.log(`TRTRTRTRTRT? ${plusButtonEnabled}`);
//     expect(plusButtonEnabled, 'Plus Button Is Not Enabled1').to.be.false
//     await browser.pause(1000)
// });

// Then(/^I Verify minus-button is enabled02$/, async function() { 
//     let minusButtonLocator = await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[1]`)
//     let minusButtonEnabled = await minusButtonLocator.isEnabled()
//     console.log(`TDTDTDTDTD? ${minusButtonEnabled}`);
//     expect(minusButtonEnabled, 'Plus Button Is Not Enabled2').to.be.true
//     await browser.pause(1000)
// });

// When(/^I Select “Children” as 5$/, async function() { 
//     await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[1]`).click()
//     await browser.pause(1000)
// });

// Then(/^I Verify Children-age dropdown are 5$/, async function() { 
//     let is1stChildDropDownDisplayed= await $(`//select[@id="age-traveler_selector_children_age_selector-0-0"]`).isEnabled()
//     console.log(`One1? ${is1stChildDropDownDisplayed}`);
//     expect(is1stChildDropDownDisplayed, 'Child 1 Is Not Displayed').to.be.true
//     await browser.pause(1000)

//     let is2ndChildDropDownDisplayed= await $(`//select[@id="age-traveler_selector_children_age_selector-0-1"]`).isEnabled()
//     console.log(`TWO2? ${is2ndChildDropDownDisplayed}`);
//     expect(is1stChildDropDownDisplayed, 'Child 1 Is Not Displayed').to.be.true
//     await browser.pause(1000)

//     let is3rdChildDropDownDisplayed= await $(`//select[@id="age-traveler_selector_children_age_selector-0-2"]`).isEnabled()
//     console.log(`THREE3? ${is3rdChildDropDownDisplayed}`);
//     expect(is3rdChildDropDownDisplayed, 'Child 3 Is Not Displayed').to.be.true
//     await browser.pause(1000)

//     let is4thChildDropDownDisplayed= await $(`//select[@id="age-traveler_selector_children_age_selector-0-3"]`).isEnabled()
//     console.log(`FOUR4? ${is4thChildDropDownDisplayed}`);
//     expect(is4thChildDropDownDisplayed, 'Child 1 Is Not Displayed').to.be.true
//     await browser.pause(1000)

//     let is5thChildDropDownDisplayed= await $(`//select[@id="age-traveler_selector_children_age_selector-0-4"]`).isEnabled()
//     console.log(`Five5? ${is5thChildDropDownDisplayed}`);
//     expect(is5thChildDropDownDisplayed, 'Child 1 Is Not Displayed').to.be.true
//     await browser.pause(1000)
// });

// Then(/^I Verify Plus button is enabled$/, async function() { 
//     let plusButtonLocator = await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[2]`)
//     let plusButtonEnabled = await plusButtonLocator.isEnabled()
//     console.log(`TRTRTRTRTRT? ${plusButtonEnabled}`);
//     expect(plusButtonEnabled, 'Plus Button Is Not Enabled1').to.be.true
//     await browser.pause(1000)
// });

// Then(/^I Verify minus-button is enabled03$/, async function() { 
//     let minusButtonLocator = await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[1]`)
//     let minusButtonEnabled = await minusButtonLocator.isEnabled()
//     console.log(`TDTDTDTDTD? ${minusButtonEnabled}`);
//     expect(minusButtonEnabled, 'Plus Button Is Not Enabled2').to.be.true
//     await browser.pause(1000)
// });


// When(/^I Select “Children” as 0$/, async function() { 
//     await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[1]`).click()
//     await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[1]`).click()
//     await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[1]`).click()
//     await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[1]`).click()
//     await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[1]`).click()
//     await browser.pause(1000)
// });

// Then(/^I Verify Children-age dropdown is NOT displayed$/, async function() { 
//     let is1stChildDropDownDisplayed= await $(`//select[@id="age-traveler_selector_children_age_selector-0-0"]`).isDisplayed()
//     console.log(`SDFSDF? ${is1stChildDropDownDisplayed}`);
//     expect(is1stChildDropDownDisplayed, 'Child 1 Is Not Displayed').to.be.false
//     await browser.pause(1000)
// });

// Then(/^I Verify Plus button is enabled02$/, async function() { 
//     let plusButtonLocator = await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[2]`)
//     let plusButtonEnabled = await plusButtonLocator.isEnabled()
//     console.log(`TRTRTRTRTRT? ${plusButtonEnabled}`);
//     expect(plusButtonEnabled, 'Plus Button Is Not Enabled1').to.be.true
//     await browser.pause(1000)
// });

// Then(/^I Verify minus-button is disabled04$/, async function() { 
//     let minusButtonLocator = await $(`//body/div[@id='app-blossom-flex-ui']/div[@id='app-layer-manager']/div[@id='app-layer-base']/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/button[1]`)
//     let minusButtonEnabled = await minusButtonLocator.isEnabled()
//     console.log(`TDTDTDTDTD? ${minusButtonEnabled}`);
//     expect(minusButtonEnabled, 'Plus Button Is Not Enabled2').to.be.false
//     await browser.pause(1000)
// });














}
module.exports = HomepageS1Test;
