import{test,expect} from "@playwright/test"
test("amazon add to cart",async({page})=>{
    page.goto('https://www.amazon.com/')
    page.locator ('//input[@type="text"]').fill('iphone')
    page.locator('//span[text()="Total Wireless iPhone 11, 64GB, Black - Prepaid Smartphone (Locked)"]').click()
    
})