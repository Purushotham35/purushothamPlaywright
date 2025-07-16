import { test, expect } from '@playwright/test';

let page

test.describe('alerts', () => {
  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
  });

  test('handle simple alert', async () => {
    page.once('dialog', async dialog => {
      console.log('alert message:', dialog.message())
      await dialog.accept()
    })

    await page.locator("//button[text()='Click for JS Alert']").click()
  })

  test("verify confirm alert", async () => {
    page.once('dialog', async dialog => {
      console.log('confirm alert message:', dialog.message())
      await dialog.accept();  // or dialog.dismiss()
    })

    await page.locator("//button[text()='Click for JS Confirm']").click()
  })

  test('verify prompt', async () => {
    page.once('dialog', async dialog => {
      console.log('prompt alert:', dialog.message())
      await dialog.accept("hello")
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()
  })
})
