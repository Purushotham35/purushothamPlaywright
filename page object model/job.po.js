



const { expect } = require('@playwright/test');
exports.job=class job{

    constructor(page){

        this.page=page
        //job title locators
this.adminLocator=page.locator('a[href="/web/index.php/admin/viewAdminModule"]')
  this.jobLocator = page.locator('//span[text()="Job "]')
this.clickOnjobtitle=page.locator("//a[text()='Job Titles']")
this.add1Locator=page.locator('i[class="oxd-icon bi-plus oxd-button-icon"]')
this.jobtitleInput=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
this.save1locator=page.locator('button[type="submit"]')

//pay grade locators

this.paygradeLocator=page.locator("//a[text()='Pay Grades']")
this.add2Locator=page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]')
this.nameInput=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
this.save2locator=page.locator('button[type="submit"]')
this.verify2=page.locator("//h6[text()='Edit Pay Grade']")

//employent status  locators

this.empStusLocator=page.locator("//a[text()='Employment Status']")
this.add3Locator=page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]')
this.nameInput1=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
this.save3button=page.locator(" //button[text()=' Save ']")
this.verify3=page.locator("//h6[text()='Employment Status']")

//job categories locators
this.clickOnjobCategory=page.locator("//a[text()='Job Categories']")
this.clickOnAdd4=page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]')
this.nameInput2=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
this.save4Button=page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]')
this.verify4=page.locator("//h6[text()='Job Categories']")

//work shift locators
 this.clickOnworkShifts=page.locator("//a[text()='Work Shifts']")
this.clickOnAdd5=page.locator('i[class="oxd-icon bi-plus oxd-button-icon"]')
this.shiftnameInput=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
this.save5Button=page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]')
this.verify5=page.locator("//h6[text()='Work Shifts']")

    }

async adminpage(){
    await expect(this.adminLocator).toBeVisible()
await this.adminLocator.click()
  await expect(this.jobLocator).toBeVisible()
await this.jobLocator.click()

}
async jobtitle(jobTitleName){
await this.clickOnjobtitle.click()
await this.add1Locator.click()
  
await this.jobtitleInput.fill(jobTitleName)
await this.save1locator.click()
await expect(this.page).toHaveURL(/viewJobTitleList$/)

}
async paygrade(name){
await this.paygradeLocator.click()
await this.add2Locator.click()
await this.nameInput.fill(name)
await this.save2locator.click()
await expect(this.verify2).toBeVisible("Edit Pay Grade")

}
async empStatu(name1){
await this.empStusLocator.click()
await this.add3Locator.click()
await this.nameInput1.fill(name1)
await this.save3button.click()
await expect(this.verify3).toBeVisible("Employment Status")

}
async jobcategories(name2){
await this.clickOnjobCategory.click()
await this.clickOnAdd4.click()
await this.nameInput2.fill(name2)
await this.save4Button.click()
await expect(this.verify4).toBeVisible("Employment Status")

}
async workshift(shiftName){
await this.clickOnworkShifts.click()
await this.clickOnAdd5.click()
await this.shiftnameInput.fill(shiftName)
await this.save5Button.click()
await expect(this.verify5).toBeVisible("Work Shifts")

}

}