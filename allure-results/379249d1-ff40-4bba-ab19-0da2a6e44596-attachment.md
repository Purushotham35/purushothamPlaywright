# Test info

- Name: verify login functionality >> verify job categories
- Location: C:\Playwright Automation\tests\job.spec.js:34:5

# Error details

```
Error: Timed out 30000ms waiting for expect(locator).toBeVisible()

Locator: locator('a[href="/web/index.php/admin/viewAdminModule"]')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 30000ms
  - waiting for locator('a[href="/web/index.php/admin/viewAdminModule"]')

    at job.adminpage (C:\Playwright Automation\page object model\job.po.js:50:37)
    at C:\Playwright Automation\tests\job.spec.js:19:15
```

# Page snapshot

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Admin" [level=6]
  - heading "/ Job" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Test User
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: User Management 
      - listitem: Job 
      - listitem: Organization 
      - listitem: Qualifications 
      - listitem:
        - link "Nationalities":
          - /url: "#"
      - listitem:
        - link "Corporate Branding":
          - /url: "#"
      - listitem: Configuration 
      - button ""
- heading "Job Titles" [level=6]
- button " Add"
- separator
- text: (31) Records Found
- table:
  - rowgroup:
    - row " Job Titles  Job Description Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Job Titles "
      - columnheader "Job Description"
      - columnheader "Actions"
  - rowgroup:
    - row " Chief Executive Officer  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Chief Executive Officer"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Chief Financial Officer  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Chief Financial Officer"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Chief Technical Officer  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Chief Technical Officer"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Content Specialist  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Content Specialist"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Customer Success Manager  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Customer Success Manager"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Database Administrator  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Database Administrator"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Finance Manager  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Finance Manager"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Financial Analyst  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Financial Analyst"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Head of Support  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Head of Support"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " HR Associate  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "HR Associate"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " HR Manager  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "HR Manager"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " IT Manager  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "IT Manager"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Network Administrator  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Network Administrator"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " new  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "new"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Payroll Administrator  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Payroll Administrator"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Pre-Sales Coordinator  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Pre-Sales Coordinator"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " QA Engineer  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "QA Engineer"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " QA Lead  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "QA Lead"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " qwer hiii  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "qwer"
      - cell "hiii"
      - cell " ":
        - button ""
        - button ""
    - row " rsjsrii dhhdhhddjdjdjjdjdj  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "rsjsrii"
      - cell "dhhdhhddjdjdjjdjdj"
      - cell " ":
        - button ""
        - button ""
    - row " Sales Representative  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Sales Representative"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " SDET32pb2pf  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "SDET32pb2pf"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " SDET3eyigfg  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "SDET3eyigfg"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " SDET9usoz Automation  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "SDET9usoz"
      - cell "Automation"
      - cell " ":
        - button ""
        - button ""
    - row " sfrgviuore  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "sfrgviuore"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Social Media Marketer  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Social Media Marketer"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Software Architect  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Software Architect"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Software Engineer  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Software Engineer"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " Support Specialist  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Support Specialist"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " VP - Client Services  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "VP - Client Services"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " VP - Sales & Marketing  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "VP - Sales & Marketing"
      - cell
      - cell " ":
        - button ""
        - button ""
- paragraph: OrangeHRM OS 5.7
- paragraph:
  - text: © 2005 - 2025
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
   1 |
   2 | import { expect } from "@playwright/test"
   3 |
   4 | exports.job=class job{
   5 |
   6 |     constructor(page){
   7 |
   8 |         this.page=page
   9 |         //job title locators
  10 | this.adminLocator=page.locator('a[href="/web/index.php/admin/viewAdminModule"]')
  11 |   this.jobLocator = page.locator('//span[text()="Job "]')
  12 | this.clickOnjobtitle=page.locator("//a[text()='Job Titles']")
  13 | this.add1Locator=page.locator('i[class="oxd-icon bi-plus oxd-button-icon"]')
  14 | this.jobtitleInput=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
  15 | this.save1locator=page.locator('button[type="submit"]')
  16 |
  17 | //pay grade locators
  18 |
  19 | this.paygradeLocator=page.locator("//a[text()='Pay Grades']")
  20 | this.add2Locator=page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]')
  21 | this.nameInput=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
  22 | this.save2locator=page.locator('button[type="submit"]')
  23 | this.verify2=page.locator("//h6[text()='Edit Pay Grade']")
  24 |
  25 | //employent status  locators
  26 |
  27 | this.empStusLocator=page.locator("//a[text()='Employment Status']")
  28 | this.add3Locator=page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]')
  29 | this.nameInput1=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
  30 | this.save3button=page.locator(" //button[text()=' Save ']")
  31 | this.verify3=page.locator("//h6[text()='Employment Status']")
  32 |
  33 | //job categories locators
  34 | this.clickOnjobCategory=page.locator("//a[text()='Job Categories']")
  35 | this.clickOnAdd4=page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]')
  36 | this.nameInput2=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
  37 | this.save4Button=page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]')
  38 | this.verify4=page.locator("//h6[text()='Job Categories']")
  39 |
  40 | //work shift locators
  41 |  this.clickOnworkShifts=page.locator("//a[text()='Work Shifts']")
  42 | this.clickOnAdd5=page.locator('i[class="oxd-icon bi-plus oxd-button-icon"]')
  43 | this.shiftnameInput=page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
  44 | this.save5Button=page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]')
  45 | this.verify5=page.locator("//h6[text()='Work Shifts']")
  46 |
  47 |     }
  48 |
  49 | async adminpage(){
> 50 |     await expect(this.adminLocator).toBeVisible()
     |                                     ^ Error: Timed out 30000ms waiting for expect(locator).toBeVisible()
  51 | await this.adminLocator.click()
  52 |   await expect(this.jobLocator).toBeVisible()
  53 | await this.jobLocator.click()
  54 |
  55 | }
  56 | async jobtitle(jobTitleName){
  57 | await this.clickOnjobtitle.click()
  58 | await this.add1Locator.click()
  59 |   
  60 | await this.jobtitleInput.fill(jobTitleName)
  61 | await this.save1locator.click()
  62 | await expect(this.page).toHaveURL(/viewJobTitleList$/)
  63 |
  64 | }
  65 | async paygrade(name){
  66 | await this.paygradeLocator.click()
  67 | await this.add2Locator.click()
  68 | await this.nameInput.fill(name)
  69 | await this.save2locator.click()
  70 | await expect(this.verify2).toBeVisible("Edit Pay Grade")
  71 |
  72 | }
  73 | async empStatu(name1){
  74 | await this.empStusLocator.click()
  75 | await this.add3Locator.click()
  76 | await this.nameInput1.fill(name1)
  77 | await this.save3button.click()
  78 | await expect(this.verify3).toBeVisible("Employment Status")
  79 |
  80 | }
  81 | async jobcategories(name2){
  82 | await this.clickOnjobCategory.click()
  83 | await this.clickOnAdd4.click()
  84 | await this.nameInput2.fill(name2)
  85 | await this.save4Button.click()
  86 | await expect(this.verify4).toBeVisible("Employment Status")
  87 |
  88 | }
  89 | async workshift(shiftName){
  90 | await this.clickOnworkShifts.click()
  91 | await this.clickOnAdd5.click()
  92 | await this.shiftnameInput.fill(shiftName)
  93 | await this.save5Button.click()
  94 | await expect(this.verify5).toBeVisible("Work Shifts")
  95 |
  96 | }
  97 |
  98 | }
```