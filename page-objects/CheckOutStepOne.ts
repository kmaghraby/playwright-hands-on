import { Locator, Page } from "@playwright/test"

export class CheckOutStepOne {

    readonly page: Page
    readonly firstName: Locator
    readonly lastName: Locator
    readonly postalCode: Locator
    readonly continueButton: Locator

    constructor(page: Page){

        this.page = page
        this.firstName = page.locator('#first-name')
        this.lastName = page.locator('#last-name')
        this.postalCode = page.locator('#postal-code')
        this.continueButton = page.locator('#continue')
    }

    async fillCheckOutForm(firstName: string, lastName: string, zipCode: string){
        await this.firstName.type(firstName)
        await this.lastName.type(lastName)
        await this.postalCode.type(zipCode)
    }

    async submitCheckOutForm(){
        await this.continueButton.click()
    }
}

