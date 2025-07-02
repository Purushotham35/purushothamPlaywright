import { test, expect } from '@playwright/test';
import data from "../../testdata/login.json"
var username="Admin"
var password="admin123"

test("verify add job title",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator('(//input[@class="oxd-input oxd-input--active"])[1]').fill("Admin")

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