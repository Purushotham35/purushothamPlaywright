
import{expect} from '@playwright/test'
exports.heroku=class heroku{
constructor(page){
this.page=page
this.alertLocator1=page.locator("text=Click for JS Alert")
this.alertLocator2=page.locator("text=Click for JS Confirm")
this.alertLocator3=page.locator("text=Click for JS Prompt")

}

async launchHeroku(){

 await this.page.goto("https://the-internet.herokuapp.com/javascript_alerts")


}
async commonAlert() {
  // JS Alert
  this.page.once('dialog', async dialog => {
    console.log("Alert 1 Message:", dialog.message());
    await dialog.accept();
  });
  await this.alertLocator1.click();

  // JS Confirm
  this.page.once('dialog', async dialog => {
    console.log("Alert 2 Message:", dialog.message());
    await dialog.accept();  // or dialog.dismiss()
  });
  await this.alertLocator2.click();

  // JS Prompt
  this.page.once('dialog', async dialog => {
    console.log("Alert 3 Message:", dialog.message());
    await dialog.accept('hello'); // for prompt, send text
  });
  await this.alertLocator3.click();
}
}