
switch (browserName) {
    case "chromium":
await page.goto("https://www.flipkart.com/")
        break;

    case 'firefox':
await page.goto("https://www.amazon.in/")

        break;

    case 'webkit':
await page.goto("https://www.myntra.com/wishlist")
        break;


    default:
        
        break;
}