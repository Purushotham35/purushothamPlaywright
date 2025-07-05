import{test,expect} from '@playwright/test'

import{elements} from '../page object model/wwe.po'
 let ele
 let page
  test.beforeEach(async({browser})=>{
         page=await browser.newPage()
         ele= new elements (page)
         await ele.launchDemoqaUrl()
 
     })
     test("wwe with buttons",async()=>{
      await ele.buttonMethods()

     })