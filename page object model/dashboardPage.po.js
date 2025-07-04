const { expect } = require("@playwright/test")

exports.addEmp=class addEmp{

constructor(page){
    this.page=page
    this.clickOnPimLocator=page.locator('//a[@href="/web/index.php/pim/viewPimModule"]')
    this.addemployeeLocator=page.locator('//a[text()="Add Employee"]')
    this.firstNameInput=page.locator('input[name="firstName"]')
    this.lastNameInput=page.locator('input[name="lastName"]')
    this.saveButton=page.locator('button[type="submit"]')
    this.personDetails=page.locator("//h6[text()='Personal Details']")
}

async clickOnPim(){
    await this.clickOnPimLocator.click()
}

async clickOnaddemployee(){

    await this.addemployeeLocator.click()
}

async inputs(firstName,lastName){
await this.firstNameInput.fill(firstName)
await this.lastNameInput.fill(lastName)
    
}

async save(){

    await this.saveButton.click()
}

async verify(){
await expect(this.personDetails).toBeVisible()
}

}



