import{ expect} from '@playwright/test'
exports.demoGuruDemo=class demoGuruDemo{
constructor(page){

    this.page=page
 this.demoguruCheckbox=page.locator('input[type="checkbox"]')


}
async launchDemoUrl(){

await this.page.goto("https://demo.guru99.com/test/radio.html")

}
async mutltipleCheckbox(){
return this.demoguruCheckbox

}






















}