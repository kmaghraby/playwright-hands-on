import { Locator, Page } from "@playwright/test"

export class InventoryPage {

    readonly page: Page
    readonly inventoryList: Locator
    readonly sidebarMenu: Locator
    readonly logoutLink: Locator
    readonly addItemToCartButton: Locator
    readonly removeItemFromCartButton: Locator
    readonly goToCartButton: Locator

    constructor(page: Page){

        this.page = page
        this.inventoryList = page.locator('.inventory_list')
        this.sidebarMenu = page.locator('#react-burger-menu-btn')
        this.logoutLink = page.locator('#logout_sidebar_link')
        this.addItemToCartButton = page.locator('button:has-text("Add to cart")')
        this.removeItemFromCartButton = page.locator('text="Remove"')
        this.goToCartButton = page.locator('.shopping_cart_link')
    }

    async openSidebarMenu(){

        await this.sidebarMenu.click()
    }

    async clickLogoutLink(){
        await this.logoutLink.click()
    }

    async addItemToCart(){
    await this.addItemToCartButton.first().click()
    }

    async goToCartPage(){
        await (this.goToCartButton).click()
    }
}