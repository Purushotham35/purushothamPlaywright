import{test,expect} from '@playwright/test'

import{ loginPage } from '../page object model/loginPage.po'
import {addEmp} from '../page object model/dashboardPage.po'
import data from '../testdata/login.json'
  let page
  let dB
  let login

    test.beforeEach(async({browser})=>{
        page=await browser.newPage()
        dB= new addEmp(page)
        
        login=new loginPage(page)
        await login.launchUrl()
        await  login.loginWithCreds(data.username,data.password)
       

    })
    

test("add emp",async()=>{

await dB.addEmp1("purushotham","md",'testdata/files/images cheeatah.jpeg')

})