import{test , expect } from "@playwright/test"

import data from "../testdata/login.json"


test("verify login with valid credentials",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill(data.username)
await page.locator("input[type='password']").fill(data.password)
await page.locator("button[type='submit']").click()


await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

})
test("verify login with valid username and invalid password",async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill(data.username)
await page.locator("input[type='password']").fill("admin12")
await page.locator("button[type='submit']").click()
await expect(page.locator("p.oxd-text.oxd-text--p.oxd-alert-content-text")).toBeVisible("Invalid credentials")



})
test("verify login with invalid username and valid password",async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill("Adminfjvh")
await page.locator("input[type='password']").fill(data.password)
await page.locator("button[type='submit']").click()
await expect(page.locator("p.oxd-text.oxd-text--p.oxd-alert-content-text")).toBeVisible("Invalid credentials")

})

test("verify login with invalid username and invalid password",async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill("Admin123")
await page.locator("input[type='password']").fill("adminccm12")
await page.locator("button[type='submit']").click()
await expect(page.locator("p.oxd-text.oxd-text--p.oxd-alert-content-text")).toBeVisible("Invalid credentials")
})