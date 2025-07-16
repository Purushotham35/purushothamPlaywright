import{test,expect} from '@playwright/test'

import {heroku} from '../page object model/heroku'

let page
let hero


test.beforeEach(async({browser})=>{
page=await browser.newPage()
hero=new heroku(page)
await hero.launchHeroku()


})
test('verify alerts',async() =>{
await hero.commonAlert()

    })