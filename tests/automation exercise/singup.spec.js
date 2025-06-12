import {test,expect} from '@playwright/test'
import data from '../../testdata/automationexercise.json/'

test("verify signup functionality",async({page})=>{

await page.goto("https://automationexercise.com/login")
await page.locator("input[data-qa='signup-name']").fill(data.name)
await page.locator("input[data-qa='signup-email']").fill(data.email)
await page.locator("button[data-qa='signup-button']").click()
await expect(page.locator("//b[normalize-space(text())='Enter Account Information']")).toContainText("Enter Account Information")
await page.locator("(//input[@type='radio'])[1]").check("Mr")

await page.locator("input[data-qa='password']").fill("John@70130")
await page.locator("input[data-qa='first_name']").fill(data.firstname)

await page.locator("input[data-qa='last_name']").fill(data.lastname)
await page.locator("input[data-qa='address']").fill(data.Address)
await page.locator("input[data-qa='state']").fill(data.State)
await page.locator("input[data-qa='city']").fill(data.city)
await page.locator("input[data-qa='zipcode']").fill(data.Zipcode)
await page.locator("input[data-qa='mobile_number']").fill(data.MobileNumber)
await page.locator("button[data-qa='create-account']").click()
await expect(page.locator("//b[normalize-space(text())='Account Created!']")).toContainText("Account Created!")
await page.locator("//a[@data-qa='continue-button']").click()

})