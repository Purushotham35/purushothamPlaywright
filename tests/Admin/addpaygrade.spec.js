import { test, expect } from '@playwright/test'
import data from "../../testdata/add pay grade.json"

test("verify add pay grade", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await page.locator("input[placeholder='Username']").fill(data.username)
  await page.locator("input[name='password']").fill(data.password)
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
