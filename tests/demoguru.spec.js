import{test,expect} from '@playwright/test'
import{demoGuruDemo} from '../page object model/demoguru.po'

let page
let guru
test.beforeEach(async({browser})=>{
page=await browser.newPage()
guru=new demoGuruDemo(page)
 await guru.launchDemoUrl()

})
test("verify multiple checkboxes using for loop",async()=>{
const checkboxes = await guru.mutltipleCheckbox()

 const count = await checkboxes.count(); // get total number of matching checkboxes

  for (let i = 0; i < count; i++) {
    const checkbox = checkboxes.nth(i);
    const isChecked = await checkbox.isChecked();

    if (!isChecked) {
      await checkbox.check({ force: true });
    }

    await expect(checkbox).toBeChecked();
  }


})



