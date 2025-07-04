import { test, expect } from '@playwright/test';
const jobtitles={

jobtitle1:"CEO",
jobtitle2:"CFO",
jobtitle3:"COO"

}
for(let title in jobtitles){

    test(`verify add job title-${jobtitles[title]}`,async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[placeholder='Username']").fill("Admin")

await page.locator("input[name='password']").fill("admin123")
await page.locator("button[type='submit']").click()
await page.locator("//span[text()='Admin']").click()
 await page.locator("(//li[contains(@class,'oxd-topbar-body-nav-tab --parent')]/following-sibling::li)[1]").click()
await page.locator("//a[normalize-space(text())='Job Titles']").click()
await page.locator("i.oxd-icon.bi-plus.oxd-button-icon").click()
let r = (Math.random() + 1).toString(36).substring(7)
await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill(jobtitles[title]  +r)
//await expect(page.locator("//span[text()='Already exists']")).toBeVisible("Already exists")

})


}


