import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/disappearing_elements');
  const ContactUs=await page.getByRole('link', { name: 'Contact Us' })
  const Portfolio=await page.getByRole('link', { name: 'Portfolio' })
const gallery=await page.getByRole('link', { name: 'Gallery' })

   if(await gallery.isVisible()){

    await gallery.click()

   }
   else if (await Portfolio.isVisible()){

await Portfolio.click()

   }
   await expect(page).toHaveURL(/.*gallery|.*portfolio/)
});