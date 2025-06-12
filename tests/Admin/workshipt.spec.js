import { test, expect } from '@playwright/test'
import data from "../../testdata/login.json"

test("verify add workshift", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await page.locator("input[placeholder='Username']").fill(data.username)
  await page.locator("input[name='password']").fill(data.password)
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