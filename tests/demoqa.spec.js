import{test,expect} from '@playwright/test'

import{Elements} from '../page object model/wwe.po'
 let ele
 let page
test.describe("Demo QA Tests", () => {  

  test.beforeEach(async({browser})=>{
         page=await browser.newPage()
         ele= new Elements (page)
     await ele.launchDemoqaUrl()
 
     })
     test("wwe with buttons",async()=>{
      await ele.buttonMethods()

     })
     test("wwe with checkboxes",async()=>{
      await ele.checkboxes()
     })

     
     

     
      

      })