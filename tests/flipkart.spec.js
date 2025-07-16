import{test,expect} from "@playwright/test"
  test("verify add to cart in flipkart",async({page})=>{
await page.goto("https://www.flipkart.com/")
await page.locator('//input[@type="text"]').fill("iphone")
 await page.locator('//input[@type="text"]').press('Enter')
   

 const[berePage]=await Promise.all([
page.waitForEvent('popup'),
page.click("//div[text()='Apple iPhone 16 (Teal, 256 GB)']")


 ])
  await berePage.waitForLoadState()
  await berePage.locator('//button[@class="QqFHMw vslbG+ In9uk2"]').click()
  await expect(berePage).toHaveURL(/viewcart/)






  })