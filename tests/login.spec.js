import{test,expect} from '@playwright/test'
import{loginPage} from '../page object model/loginPage.po'
import loginData from '../testdata/login.json'

let page
let login

test.describe("verify login functionality",()=>{
    test.beforeEach(async({browser})=>{
        page=await browser.newPage()
        login= new loginPage(page)
        await login.launchUrl()

    })

test("verify login with valid creds",async()=>{
    await login.loginWithCreds(loginData.username,loginData.password)
    await login.loginSuccess()

})
test("verify login with valid username,invalid password",async()=>{
await login.loginWithCreds("Admin","admin13")

    await login.loginErrorMessage()

})

})