import{ exprct} from '@playwright/test'

exports.elements=class elements{
    constructor(page){
        this.page=page

        //buttonElements
         this.clickOnElementsbutton=page.locator('svg[viewBox="0 0 448 512"]')
        this.clickOnButton=page.locator("//span[text()='Buttons']")
        this.clickmeButton=page.locator("//button[text()='Click Me']")
        this.rightClickButton=page.locator("//button[text()='Right Click Me']")
        this.dblClickButton=page.locator('#doubleClickBtn')
        this.clickOnwidgets=page.locator('(//div[@class="header-text"])[4]')
        this.clickOntooltip=page.getByText("Tool Tips")
         this.clickOnHoverme=page.getByText('Hover me to see')
         this.hovermesee=page.getByPlaceholder("Hover me to see")
       




    }
    async launchDemoqaUrl(){
        await this.page.goto("https://demoqa.com")

       
    }
     async buttonMethods(){
        await this.clickOnElementsbutton.click()
        await this.clickOnButton.click()
        await this.clickmeButton.click()
        await this.rightClickButton.click({button:'right'})
        await this.dblClickButton.dblclick()
        await this.clickOnwidgets.click()
        await this.clickOntooltip.click()
        await this.clickOnHoverme.hover()
        await this.hovermesee.hover()


       
    }






















}