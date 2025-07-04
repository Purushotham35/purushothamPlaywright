import { expect } from "@playwright/test"

exports.loginPage = class loginPage{
    
constructor(page){
this.page=page
this.usenameInput=page.locator('//input[@name="username"]')
this.passwordInput=page.locator('//input[@name="password"]')
this.loginButton=page.locator('//button[@type="submit"]')
this.logo=page.getByAltText('company-branding')
this.loginError=page.locator("//p[text()='Invalid credentials']")

}
async launchUrl(){
await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  
}
async loginWithCreds(username,password){
await this.usenameInput.fill(username)
await this.passwordInput.fill(password)
await this.loginButton.click()
}
async loginErrorMessage(){
await expect(this.loginError).toBeVisible()

}
async loginSuccess(){
 await expect(this.page).toHaveURL("/web/index.php/dashboard/index")   
}

}