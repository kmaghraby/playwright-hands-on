import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { InventoryPage } from '../../page-objects/InventoryPage'
import { CartPage } from '../../page-objects/CartPage'
import { correctUser } from '../testdata/testdata';


test.describe('Add/ Remove Items to/From Cart Flow', () => {

    let loginPage: LoginPage
    let inventoryPage: InventoryPage
    let cartPage: CartPage

    test.beforeEach(async({page}) => {
        loginPage = new LoginPage(page)
        inventoryPage = new InventoryPage(page)
        cartPage = new CartPage(page)
        await loginPage.visit()
        await loginPage.logIn(correctUser.username, correctUser.password)
    })

    test('Add item to cart successfully', async({page}) => {
        await inventoryPage.addItemToCart()
        await inventoryPage.goToCartPage()
        await expect.soft(page).toHaveURL('/cart.html')
        await expect.soft(cartPage.cartItem).toHaveCount(1)
        await expect.soft(cartPage.cartItem).toContainText('Sauce Labs Backpack')
        await expect.soft(cartPage.cartItemPrice).toContainText('29.99')
        await expect.soft(cartPage.cartItemQuantity).toContainText('1')
        await expect.soft(cartPage.removeButton).toBeVisible()    
    })

    test('Remove item from cart succesfully', async({page}) => {
        await inventoryPage.addItemToCart()
        await expect.soft(inventoryPage.removeItemFromCartButton).toBeVisible()
        await inventoryPage.goToCartPage()
        await expect.soft(page).toHaveURL('/cart.html')
        await expect.soft(cartPage.cartItem).toHaveCount(1)
        await expect.soft(cartPage.cartItem).toContainText('Sauce Labs Backpack')
        await expect.soft(cartPage.cartItemPrice).toContainText('29.99')
        await expect.soft(cartPage.cartItemQuantity).toContainText('1')
        await expect.soft(cartPage.removeButton).toBeVisible()
        await cartPage.removeItemFromCart()
        await expect.soft(cartPage.cartItem).toHaveCount(0)
    })
})