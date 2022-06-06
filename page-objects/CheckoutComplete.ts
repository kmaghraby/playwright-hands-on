import { Locator, Page } from "@playwright/test";

export class CheckoutComplete {

    readonly page: Page
    readonly completeHeader: Locator
    readonly completeText: Locator
    readonly deliveryLogo: Locator

    constructor(page: Page){

        this.page = page
        this.completeHeader = page.locator('.complete-header')
        this.completeText = page.locator('.complete-text')
        this.deliveryLogo = page.locator('.pony_express')
    }
}