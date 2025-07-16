# Test info

- Name: verify add job title
- Location: C:\Playwright Automation\tests\Admin\addjobtitle.spec.js:6:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('xpath=(//input[@class="oxd-input oxd-input--active"])[1]')

    at C:\Playwright Automation\tests\Admin\addjobtitle.spec.js:8:74
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import data from "../../testdata/login.json"
   3 | var username="Admin"
   4 | var password="admin123"
   5 |
   6 | test("verify add job title",async({page})=>{
   7 | await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
>  8 | await page.locator('(//input[@class="oxd-input oxd-input--active"])[1]').fill("Admin")
     |                                                                          ^ Error: locator.fill: Target page, context or browser has been closed
   9 |
  10 | await page.locator("input[name='password']").fill(password)
  11 | await page.locator("button[type='submit']").click()
  12 | await page.locator("//span[text()='Admin']").click()
  13 |  await page.locator("(//li[contains(@class,'oxd-topbar-body-nav-tab --parent')]/following-sibling::li)[1]").click()
  14 | await page.locator("//a[normalize-space(text())='Job Titles']").click()
  15 | await page.locator("i.oxd-icon.bi-plus.oxd-button-icon").click()
  16 | let r = (Math.random() + 1).toString(36).substring(7)
  17 |
  18 | await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill("qa enginner 9"+r)
  19 | await page.locator("textarea[placeholder='Type description here']").fill("automation")
  20 | await page.locator("textarea[placeholder='Add note']").fill("add some note here")
  21 | await page.locator("button[type='submit']").click()
  22 | await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")
  23 | })
```