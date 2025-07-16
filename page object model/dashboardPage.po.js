const { expect } = require("@playwright/test")

exports.addEmp=class addEmp{

constructor(page){
    this.page=page
    this.clickOnPimLocator=page.locator('//a[@href="/web/index.php/pim/viewPimModule"]')
    this.addemployeeLocator=page.locator('//a[text()="Add Employee"]')
    this.firstNameInput=page.locator('input[name="firstName"]')
    this.lastNameInput=page.locator('input[name="lastName"]')
    this.saveButton=page.locator('button[type="submit"]')
    this.successMessage=page.locator("//*[text()='Successfully Saved']")
    this.personDetails=page.locator("//h6[text()='Personal Details']")
    this.imageUpload=page.locator('//input[@type="file"]')

}
async addEmp1(firstName,lastName,photoPath){
await this.clickOnPimLocator.click()
await this.addemployeeLocator.click()
let r = (Math.random() + 1).toString(36).substring(7)
await this.firstNameInput.fill(firstName)
await this.lastNameInput.fill(lastName)
await this.imageUpload.setInputFiles(photoPath)
await this.saveButton.click()
await expect(this.successMessage).toContainText('Successfully Saved')
await expect(this.personDetails).toBeVisible()

}
}



