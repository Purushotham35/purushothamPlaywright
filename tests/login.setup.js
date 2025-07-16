import{test,expect} from '@playwright/test'

test("authenticates", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("input[name='username']").fill(process.env.ORG_USERNAME);
    await page.locator("input[type='password']").fill(process.env.ORG_PASSWORD);
    await page.locator("button[type='submit']").click();

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
  
    await page.context().storageState()
     await page.context().storageState({path:'.auth/user.json'})

})