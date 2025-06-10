import { test, expect } from '@playwright/test'
import data from "../../testdata/login.json"

test("verify add employment status", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await page.locator("input[placeholder='Username']").fill(data.username)
  await page.locator("input[name='password']").fill(data.password)
  await page.locator("button[type='submit']").click()
  await page.locator("(//a[@class='oxd-main-menu-item'])[1]").click()
  await page.locator("(//span[@class='oxd-topbar-body-nav-tab-item'])[2]").click()
await page.locator("//a[normalize-space(text())='Job Categories']").click()
await page.locator("button.oxd-button.oxd-button--medium.oxd-button--secondary").click()
await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("qa engineer")

await page.locator("//button[@type='submit']").click()

await expect(page.locator("(//h6[contains(@class,'oxd-text oxd-text--h6')])[3]")).toContainText("Job Categories")


})