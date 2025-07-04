import { test, expect } from '@playwright/test';
 test("verify login functionality with valid credentials", {tag: '@smoke',}, async({page})=>{
await page.goto("https://www.saucedemo.com/v1/")
await page.locator("input[data-test='username']").fill("standard_user")
await page.locator("input[type='password']").fill("secret_sauce")
await page.locator("input[type='submit']").click()

await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")


 })

 
test("verify login functionality with invalid username and valid password",async({page})=>{
await page.goto("https://www.saucedemo.com/v1/")
await page.locator("input[data-test='username']").fill("locked_out_user")
await page.locator("input[type='password']").fill("secret_sauce")
await page.locator("input[type='submit']").click()
await expect(page.locator("h3[data-test='error']")).toContainText("Sorry, this user has been locked out")
})


test("verify login functionality with valid username and invalid password" ,async({page})=>{
await page.goto("https://www.saucedemo.com/v1/")
await page.locator("input[data-test='username']").fill("standard_user")
await page.locator("input[type='password']").fill("abcdefg")
await page.locator("input[type='submit']").click()
await expect(page.locator("h3[data-test='error']")).toBeVisible("Epic sadface: Username and password do not match any user in this service")
})

 test("verify  both invalid username and password ", async({page})=>{


await page.goto("https://www.saucedemo.com/v1/")
await page.locator("input[data-test='username']").fill("performar")
await page.locator("input[type='password']").fill("secrsauce")
await page.locator("input[type='submit']").click()

await expect(page.locator("h3[data-test='error']")).toBeVisible("Epic sadface: Username and password do not match any user in this service")

 })
