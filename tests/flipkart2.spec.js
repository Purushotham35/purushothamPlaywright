import {test,expect} from "@playwright/test"

test("verify flipcart2 add to card",async ({page})=>{
  await page.goto("https://www.flipkart.com/")
  await page.locator ('//input[@type="text"]').fill('iphone')
   await page.locator ('//input[@type="text"]').press('Enter')


   const[newTab]=await Promise.all([
    page.waitForEvent('popup'),
    page.locator('//div[text()="Apple iPhone 16 (Teal, 256 GB)"]').click()

   ])
   await newTab.waitForLoadState()
   await newTab.locator('//button[@class="QqFHMw vslbG+ In9uk2"]').click()

await expect(newTab).toHaveURL(/viewcart/)
await expect(newTab.locator("//span[text()='Place Order']")).toBeVisible()

})