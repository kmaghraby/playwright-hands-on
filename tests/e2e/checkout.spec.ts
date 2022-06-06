import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { InventoryPage } from '../../page-objects/InventoryPage'
import { CartPage } from '../../page-objects/CartPage'
import { CheckOutStepOne } from '../../page-objects/CheckOutStepOne'
import { CheckOutStepTwo } from '../../page-objects/CheckOutStepTwo'
import { CheckoutComplete } from '../../page-objects/CheckoutComplete'
import { correctUser, checkOutForm } from '../testdata/testdata';

test.describe('Verify Successful Checkout Flow', () => {

    let loginPage: LoginPage
    let inventoryPage: InventoryPage
    let cartPage: CartPage
    let checkOutStepOne: CheckOutStepOne
    let checkOutStepTwo: CheckOutStepTwo
    let checkOutComplete: CheckoutComplete

    test.beforeEach(async({page}) => {
        loginPage = new LoginPage(page)
        inventoryPage = new InventoryPage(page)
        cartPage = new CartPage(page)
        checkOutStepOne = new CheckOutStepOne(page)
        checkOutStepTwo = new CheckOutStepTwo(page)
        checkOutComplete = new CheckoutComplete(page)
        await loginPage.visit()
        await loginPage.logIn(correctUser.username, correctUser.password)
    })

    test('Verify Checkout Is Successful', async({page}) => {
        await inventoryPage.addItemToCart()
        await inventoryPage.goToCartPage()
        await expect.soft(page).toHaveURL('/cart.html')
        await expect.soft(cartPage.cartItem).toHaveCount(1)
        await expect.soft(cartPage.cartItem).toContainText('Sauce Labs Backpack')
        await expect.soft(cartPage.cartItemPrice).toContainText('29.99')
        await expect.soft(cartPage.cartItemQuantity).toContain
        await cartPage.proceedWithCheckout()
        await checkOutStepOne.fillCheckOutForm(checkOutForm.firstName, checkOutForm.lastName, checkOutForm.postalCode)
        await checkOutStepOne.submitCheckOutForm()
        await expect.soft(page).toHaveURL('/checkout-step-two.html')
        await expect.soft(checkOutStepTwo.cartItem).toContainText('Sauce Labs Backpack')
        await expect.soft(checkOutStepTwo.cartItemPrice).toContainText('29.99')
        await expect.soft(checkOutStepTwo.cartItemQuantity).toContainText('1')
        await expect.soft(checkOutStepTwo.paymentInfo).toBeVisible()
        await expect.soft(checkOutStepTwo.shippingInfo).toBeVisible()
        await expect.soft(checkOutStepTwo.itemSubtotal).toContainText('29.99')
        await expect.soft(checkOutStepTwo.tax).toContainText('2.40')
        await expect.soft(checkOutStepTwo.total).toContainText('32.39')
        await checkOutStepTwo.finishCheckout()
        await expect.soft(checkOutComplete.completeHeader).toContainText('THANK YOU FOR YOUR ORDER')
        await expect.soft(checkOutComplete.completeText).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        await expect.soft(checkOutComplete.deliveryLogo).toBeVisible()    
    })



})