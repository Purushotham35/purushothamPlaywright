import { test, expect } from '@playwright/test'
import { loginPage } from '../page object model/loginPage.po'
import { addEmp } from '../page object model/dashboardPage.po'
import { job } from '../page object model/job.po'
import data from '../testdata/login.json'

let page
let dB
let login
let admin
test.describe("verify login functionality",()=>{

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage()
  dB = new addEmp(page)
  admin = new job(page)
  login = new loginPage(page)

  await login.launchUrl()
  await login.loginWithCreds(data.username, data.password);
  await admin.adminpage() 
});

test("verify add job title", async () => {
  let r = (Math.random() + 1).toString(36).substring(7)
  await admin.jobtitle("SDET3"+r)
});
test("verify paygrade", async () => {
  let r = (Math.random() + 1).toString(36).substring(7)
  await admin.paygrade(data.name+r)
});
test("verify emp status", async () => {
  let r = (Math.random() + 1).toString(36).substring(7)
  await admin.empStatu(data.empName+r)
})
test("verify job categories", async () => {
  let r = (Math.random() + 1).toString(36).substring(7)
  await admin.jobcategories(data.jobcategory+r)
})
test("verify work shifts", async () => {
  let r = (Math.random() + 1).toString(36).substring(7)
  await admin.workshift(data.shiftName+r)
})

})
