import { test, expect } from '@playwright/test';

const employeeList = {
   empName1:{firstNAME: "Alluarjun",LastName:"stylishStar"} ,
  empName2: {firstNAME:"Maheshbabu",LastName:"superstar "},
   empName3:{firstNAME:"Ramcharan"  ,LastName:"power star"} ,
  empName4: {firstNAME:"NTR" , LastName:"youngTiger"},
   empName5:{firstNAME:"prabhash" , LastName:"rebel star"}
}

for (let title in employeeList) {
  

  test(`verify addemployee with the name of ${employeeList[title].firstNAME}` , async ({ page }) => {

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill("Admin")
await page.locator("input[type='password']").fill("admin123")
await page.locator("button[type='submit']").click()
await page.locator("//span[text()='PIM']").click()
await page.locator("(//a[@class='oxd-topbar-body-nav-tab-item'])[2]").click()
//let r = (Math.random() + 1).toString(36).substring(7)
await page.locator("input[name='firstName']").fill(employeeList[title].firstNAME)

await page.locator("input[name='lastName']").fill((employeeList[title].LastName))
await page.locator("button[type='submit']").click()
//await expect(page.locator("//body[@data-new-gr-c-s-check-loaded='14.1240.0']")).toContainText('Successfully saved');



})
}