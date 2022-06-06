import { Locator, Page } from "@playwright/test"

export class CartPage {
    
    readonly page: Page
    readonly cartItem: Locator
    readonly cartItemPrice: Locator
    readonly cartItemQuantity: Locator
    readonly removeButton: Locator
    readonly checkOutButton: Locator

    constructor(page: Page){
        this.page = page
        this.cartItem = page.locator('.cart_item')
        this.cartItemPrice = page.locator('.inventory_item_price')
        this.cartItemQuantity = page.locator('.cart_quantity')
        this.removeButton = page.locator('.item_pricebar .btn_secondary')
        this.checkOutButton = page.locator('#checkout')
    }

    async removeItemFromCart(){
        await this.removeButton.first().click()
    }

    async proceedWithCheckout(){
        await this.checkOutButton.click()
    }
}