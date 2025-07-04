import{test,expect} from '@playwright/test'

test("verify element is visible",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/tables")

await expect(page.locator(`//table[@id="table1"]/tbody/tr[2]/td[3]`)).toBeVisible("fbach@yahoo.com")

await expect(page.locator(`//table[@id="table1"]/tbody/tr[4]/td[2]`)).toContainText("Tim")





})