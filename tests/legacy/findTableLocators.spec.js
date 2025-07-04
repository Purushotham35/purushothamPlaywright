import{test,expect} from '@playwright/test'

test.beforeEach(async({page})=>{

    await page.goto("https://www.w3schools.com/html/html_tables.asp")
})

test("locators findout in tables",async({page})=>{

await expect(page.locator("//table[@id='customers']/tbody/tr[7]/td[3]")).toBeVisible("Italy")



})
