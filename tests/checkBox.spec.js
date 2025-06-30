import{ test, expect} from "@playwright/test"
import data from "../testdata/login.json"





test("verify checkboxes using loops",async({page})=>{

 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await page.locator("input[placeholder='Username']").fill(data.username)
  await page.locator("input[name='password']").fill(data.password)
  await page.locator("button[type='submit']").click()
await page.locator("//span[text()='PIM']").click()


const arr=["(//i[contains(@class,'oxd-icon bi-check')])[2]","(//i[contains(@class,'oxd-icon bi-check')])[3]","(//i[contains(@class,'oxd-icon bi-check')])[5]"]
for(let i=0; i<arr.length; i++){

await page.locator(arr[i]).click({force:true})

}
}) 