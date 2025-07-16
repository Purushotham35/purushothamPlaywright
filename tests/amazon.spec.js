import{test,expect} from '@playwright/test'


test("verify multitabs page",async({page})=>{
await page.goto("https://www.amazon.in/")

await page.getByPlaceholder("Search Amazon.in").fill("iphone")
await page.getByPlaceholder("Search Amazon.in").press('Enter')
await page.locator("(//span[text()='Apple iPhone 15 (128 GB) - Blue'])[1]").click()
await page.locator('(//input[@id="add-to-cart-button"])[2]').click()
await expect(page.locator('//h1[@class="a-size-medium-plus a-color-base sw-atc-text a-text-bold"]')).toBeVisible('Added to cart')



})