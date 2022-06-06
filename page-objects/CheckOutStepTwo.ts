import { Locator, Page } from "@playwright/test"

export class CheckOutStepTwo {
    readonly page: Page
    readonly cartItem: Locator
    readonly cartItemPrice: Locator
    readonly cartItemQuantity: Locator
    readonly paymentInfo: Locator
    readonly shippingInfo: Locator
    readonly itemSubtotal: Locator
    readonly tax: Locator
    readonly total: Locator
    readonly finishButton: Locator    

    constructor(page: Page){
        this.page = page
        this.cartItem = page.locator('.cart_item')
        this.cartItemPrice = page.locator('.inventory_item_price')
        this.cartItemQuantity = page.locator('.cart_quantity')
        this.paymentInfo = page.locator('text=SauceCard #31337')
        this.shippingInfo = page.locator('text=FREE PONY EXPRESS DELIVERY!')
        this.itemSubtotal = page.locator('.summary_subtotal_label')
        this.tax = page.locator ('.summary_tax_label')
        this.total = page.locator('.summary_total_label')
        this.finishButton = page.locator('#finish')
    }

    async finishCheckout() {
        await this.finishButton.click()
    }
}