const { test, expect } = require('@playwright/test');

test('Add an item to cart on Flipkart', async ({ page }) => {
  // Go to Flipkart
  await page.goto('https://www.flipkart.com');

  // Close login popup if it appears
  const closeBtn = page.locator('button', { hasText: '✕' });
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }

  // Search for a product
  await page.fill('input[title="Search for products, brands and more"]', 'laptop');
  await page.press('input[title="Search for products, brands and more"]', 'Enter');

  // Wait for search results and click the first product
  await page.waitForSelector('a._1fQZEK, a.IRpwTa');
  const firstProduct = await page.locator('a._1fQZEK, a.IRpwTa').first();
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page'),
    firstProduct.click()
  ]);

  // Wait for product page to load
  await newPage.waitForLoadState();

  // Click 'Add to Cart' button
  const addToCartBtn = newPage.locator('button', { hasText: 'Add to cart' });
  await addToCartBtn.click();

  // Assert cart page is visible
  await expect(newPage.locator('span', { hasText: 'My Cart' })).toBeVisible();
});