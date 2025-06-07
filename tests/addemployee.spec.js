import { test, expect} from '@playwright/test';
test("verify addemployee",async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill("Admin")
await page.locator("input[type='password']").fill("admin123")
await page.locator("button[type='submit']").click()
await page.locator("//span[text()='PIM']").click()
await page.locator("(//a[@class='oxd-topbar-body-nav-tab-item'])[2]").click()
await page.locator("input[name='firstName']").fill("purushotham")

await page.locator("input[name='lastName']").fill("M")
await page.locator("button[type='submit']").click()
await expect(page.locator("//h6[text()='purushotham M']")).toBeVisible()




})