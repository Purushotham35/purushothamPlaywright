import{test,expect} from '@playwright/test'

test.beforeEach(async({page})=>{
await page.goto("https://www.flipkart.com/")

})

test("practice",async({page})=>{
await page.locator('input[name="q"]').fill("iphone")

await page.locator('input[name="q"]').press("Enter")
await page.getByText("Apple iPhone 16 (Teal, 256 GB)").click()
await page.getByText("Apple iPhone 16 (White, 128 GB)").click()
await page.getByText('Apple iPhone 13 (Starlight, 128 GB)').click()

})
