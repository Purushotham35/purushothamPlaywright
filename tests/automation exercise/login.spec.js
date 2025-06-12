import{test,expect} from '@playwright/test'

import data from  '../../testdata/automationexercise.json'

test ('verify login functionality',async({page})=>{
 await page.goto("https://automationexercise.com/login")
await page.locator("//input[@data-qa='login-email']").fill(data.email)
await page.locator("input[type='password']").fill(data.password)
await page.locator("button[data-qa='login-button']").click()
await expect(page.locator("//a[normalize-space(text())='Delete Account']")).toContainText("Delete Account")








})