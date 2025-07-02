import{test,expect} from '@playwright/test'
import data from '../../testdata/add job title.json';
import data1 from '../../testdata/add pay grade.json';


test.beforeEach(async({page})=>{
await page.goto("http://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.getByPlaceholder("username").fill("Admin")
await page.locator(`input[name="password"]`).fill("admin123")

await page.locator("button[type='submit']").click()
await page.locator("(//span[contains(@class,'oxd-text oxd-text--span')])[1]").click()
await page.locator("(//span[@class='oxd-topbar-body-nav-tab-item']//i)[2]").click()
//await page.locator("//h6[text()='Admin']").click()
})
test.afterEach(async({page})=>{ 
await page.locator("//i[@class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
await page.locator("//a[text()='Logout']").click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

})
test.afterAll(async({browser})=>{
await browser.close();
await console.log("All tests completed and browser closed.")
//await page.waitForTimeout(5000);
})
test.describe("admin",() => {



test("add job title",async({page}) =>{
await page.locator("//a[text()='Job Titles']").click()
await page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
let r = (Math.random() + 1).toString(36).substring(7)
await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(data.JobTitle+r)
await page.locator("//button[text()=' Save ']").click()
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")
})

test("add pay grades",async({page}) =>{
await page.locator("//a[text()='Pay Grades']").click()
await page.locator('(//button[@type="button"])[4]').click()
let r = (Math.random() + 1).toString(36).substring(7)
//await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(data.JobCategory+r)
await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(data1.name+r)
await page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click()

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/payGrade")
})


  })