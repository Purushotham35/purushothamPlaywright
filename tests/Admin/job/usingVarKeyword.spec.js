import { test, expect } from '@playwright/test';
import data from "../../../testdata/login.json"

var username="Admin"
var password="admin123"

test("verify add job title",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[placeholder='Username']").fill(username)

await page.locator("input[name='password']").fill(password)
await page.locator("button[type='submit']").click()
await page.locator("//span[text()='Admin']").click()
 await page.locator("(//li[contains(@class,'oxd-topbar-body-nav-tab --parent')]/following-sibling::li)[1]").click()
await page.locator("//a[normalize-space(text())='Job Titles']").click()
await page.locator("i.oxd-icon.bi-plus.oxd-button-icon").click()
let r = (Math.random() + 1).toString(36).substring(7)

await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill("qa enginner 9"+r)
await page.locator("textarea[placeholder='Type description here']").fill("automation")
await page.locator("textarea[placeholder='Add note']").fill("add some note here")
await page.locator("button[type='submit']").click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")
})


test("verify add pay grade", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await page.locator("input[placeholder='Username']").fill(username)
  await page.locator("input[name='password']").fill(password)
  await page.locator("button[type='submit']").click()

  await page.locator("(//a[@class='oxd-main-menu-item'])[1]").click()
  await page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[2]").click()
  await page.locator("//a[normalize-space(text())='Pay Grades']").click()

  await page.locator("//button[contains(.,'Add')]").click()
  let r = (Math.random() + 1).toString(36).substring(7)
  await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(data.name+r)
  await page.locator("button[type='submit']").click()

  await expect(page.locator('xpath=(//h6[contains(@class,"oxd-text oxd-text--h6")])[2]')).toHaveText("Add Pay Grade");

})
test("verify add employment status", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await page.locator("input[placeholder='Username']").fill(username)
  await page.locator("input[name='password']").fill(password)
  await page.locator("button[type='submit']").click()
  await page.locator("(//a[@class='oxd-main-menu-item'])[1]").click()
  await page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[2]").click()

await page.locator("(//a[@class='oxd-topbar-body-nav-tab-link'])[3]").click()
await page.locator("//i[contains(@class,'oxd-icon bi-plus')]").click()
let r = (Math.random() + 1).toString(36).substring(7)
await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(data.empName+r)


await page.locator("//button[@type='submit']").click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveEmploymentStatus")

})
test("verify add job category status", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await page.locator("input[placeholder='Username']").fill(username)
  await page.locator("input[name='password']").fill(password)
  await page.locator("button[type='submit']").click()
  await page.locator("(//a[@class='oxd-main-menu-item'])[1]").click()
  await page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[2]").click()
await page.locator("//a[normalize-space(text())='Job Categories']").click()
await page.locator("button.oxd-button.oxd-button--medium.oxd-button--secondary").click()
let r = (Math.random() + 1).toString(36).substring(7)
await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("qa engineer"+r)

await page.locator("//button[@type='submit']").click()

await expect(page.locator("(//h6[contains(@class,'oxd-text oxd-text--h6')])[3]")).toContainText("Job Categories")


})

test("verify add workshift", async ({ page }) => {

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await page.locator("input[placeholder='Username']").fill(username)
  await page.locator("input[name='password']").fill(password)
  await page.locator("button[type='submit']").click()
  await page.locator("(//a[@class='oxd-main-menu-item'])[1]").click()
  await page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[2]").click()


 await page.locator("//a[normalize-space(text())='Work Shifts']").click()

 await page.locator("//i[contains(@class,'oxd-icon bi-plus')]").click()
 let r = (Math.random() + 1).toString(36).substring(7)
 await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("day shift"+r)
  await page.locator("//button[@type='submit']").click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/workShift")


})
