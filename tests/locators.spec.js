import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(process.env.ORG_URL);
  await page.getByPlaceholder("username").fill(process.env.ORG_USERNAME);
  await page.locator(`input[name="password"]`).fill(process.env.ORG_PASSWORD);

  await page.locator("button[type='submit']").click();
});
test.describe("pim",async()=>{


test("verify locator with text and class", async({page}) =>{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers");
  await page.locator('(//i[@class="oxd-icon bi-chevron-down"])[1]').click();
  await page.locator("//a[text()='Users']").click();

  await page.locator('(//i[@with-container="false"])[4]').click();

  await page.locator("//a[text()='Skills']").click();
  await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click();
  let r = (Math.random() + 1).toString(36).substring(7);

  await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill("purushotham" + r);
  await page.locator("//button[text()=' Save ']").click();
});

test("working with partial text locator", async ({ page }) => {
  await page.locator('//a[@ href="/web/index.php/pim/viewPimModule"]').click();
  await page.locator("//a[contains(.,'List')] ").click();
  await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"] ').click();
  let r = (Math.random() + 1).toString(36).substring(7);

  await page.locator('//input[@name="firstName"]').fill("purushotham" + r);
  await page.locator('//input[@placeholder="Last Name"]').fill("mdk");
  await page.locator('//button[contains(.," Save ")] ').click();
});

test("verify employee list in pim", async ({ page }) => {
  await page.locator('//a[@ href="/web/index.php/pim/viewPimModule"]').click();
  await page.locator("//a[contains(.,'List')] ").click();
  await page.locator('(//input[@placeholder="Type for hints..."])[1]').fill("purushotham405tw  mdk");
  await page.locator('//button[contains(.," Search ")]').click();
 // await expect(page.locator("//div[text()='purushotham405tw ']")).toHavetext("purushotham405tw")

})
test("verify pi chart is visible or not in dashboard",async({page})=>{

await expect(page.locator('(//canvas[@style="display: block; box-sizing: border-box; height: 265px; width: 326px;"])[1]')).toBeVisible()
await expect(page.locator("//li/span[text()='Human Resources']")).toContainText("Human Resources")

await expect(page.locator("//span[text()='Engineering']")).toContainText("Engineering")
await expect(page.locator('//span[@title="Client Services"]/../..')).toBeVisible()
await page.locator('//i[@class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]').click()

await page.locator("//a[text()='Logout']").click()
})

})
