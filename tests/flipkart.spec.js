// const { test, expect } = require('@playwright/test');

// test('Add an item to cart on Flipkart', async ({ page }) => {
//   // Go to Flipkart
//   await page.goto('https://www.flipkart.com');

//   // Close login popup if it appears
//   const closeBtn = page.locator('button', { hasText: '✕' });
//   if (await closeBtn.isVisible()) {
//     await closeBtn.click();
//   }

//   // Search for a product
//   await page.fill('input[title="Search for products, brands and more"]', 'laptop');
//   await page.press('input[title="Search for products, brands and more"]', 'Enter');

//   // Wait for search results and click the first product
//   await page.waitForSelector('a._1fQZEK, a.IRpwTa');
//   const firstProduct = await page.locator('a._1fQZEK, a.IRpwTa').first();
//   const [newPage] = await Promise.all([
//     page.context().waitForEvent('page'),
//     firstProduct.click()
//   ]);

//   // Wait for product page to load
//   await newPage.waitForLoadState();

//   // Click 'Add to Cart' button
//   const addToCartBtn = newPage.locator('button', { hasText: 'Add to cart' });
//   await addToCartBtn.click();

//   // Assert cart page is visible
//   await expect(newPage.locator('span', { hasText: 'My Cart' })).toBeVisible();
// });


// import{test,expect} from '@playwright/test'

// test("verify _flipkart product",async({page})=>{
// await page.goto("https://www.flipkart.com/")
// await page.getByPlaceholder(`Search for Products, Brands and More`).fill("iphone")
// await page.getByPlaceholder(`Search for Products, Brands and More`).press("Enter")

// const [newTab]=await Promise.all([
// page.waitForEvent('popup'),

// await page.locator("//div[text()='Apple iPhone 16 (Teal, 256 GB)']").click()

// ])
// //await expect(newTab).toHaveURL(/apple-iphone-16-teal-256-gb/)
// const nameOfThePhone=await newTab.locator("//span[text()='Apple iPhone 16 (Teal, 256 GB)']").textContent()



// //await newPage.waitForLoadState();
//   const addToCartBtn = page.locator("//button[text()='Add to cart']");
//   await addToCartBtn.click();
// })




import { test, expect } from '@playwright/test';

test("verify _flipkart product", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");

  // Close login popup if it appears
  const closeLoginBtn = page.locator("button._2KpZ6l._2doB4z");
  if (await closeLoginBtn.isVisible()) {
    await closeLoginBtn.click();
  }

  // Search for iPhone
  const searchBox = page.getByPlaceholder("Search for Products, Brands and More");
  await searchBox.fill("iphone");
  await searchBox.press("Enter");

  // Wait for search results
  await page.waitForLoadState("networkidle");

  // Click on product (assuming it opens in the same tab)
  await page.locator("//div[text()='Apple iPhone  (White, 128 GB)']").click();

  // Wait for product page to load
  await page.waitForLoadState("networkidle");

  // Get product name
 const nameOfThePhone=await newTab.locator("span[text()='Apple iPhone 16 (White, 128 GB)']").textContent()  
  //console.log("Product Name:", nameOfThePhone);
//span[text()='Apple iPhone 16 (White, 128 GB)']
  // Click "Add to cart"
  const addToCartBtn = page.locator("//button[text()='Add to cart']");
  await addToCartBtn.click();
});
