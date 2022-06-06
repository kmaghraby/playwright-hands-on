import { test, expect } from '@playwright/test'
import { LoginPage } from '../../page-objects/LoginPage'
import { InventoryPage } from '../../page-objects/InventoryPage'
import { correctUser, wrongUser } from '../testdata/testdata';



test.describe('Verify Login and Logout flow',() => {
    let loginPage: LoginPage
    let inventoryPage: InventoryPage

    test.beforeEach(async({page}) => {
        loginPage = new LoginPage(page)
        inventoryPage = new InventoryPage(page)
        await loginPage.visit()
    
    })

    test('Verify Successful Login', async({page}) => {
        await loginPage.logIn(correctUser.username, correctUser.password)
        await expect.soft(page).toHaveURL('/inventory.html')
        await expect.soft(inventoryPage.inventoryList).toBeVisible()
    })

    test('Verify Failed Login', async() => {
        await loginPage.logIn(wrongUser.username, wrongUser.password)
        await expect(loginPage.loginErrorMessage).toContainText(loginPage.errorMessageTxt)    
    })

    test('Verify Successful Logout', async({page}) => {
        await loginPage.logIn(correctUser.username, correctUser.password)
        await expect.soft(page).toHaveURL('/inventory.html')
        await expect.soft(inventoryPage.inventoryList).toBeVisible()
        await inventoryPage.openSidebarMenu()
        await inventoryPage.clickLogoutLink()
        await expect.soft(page).toHaveURL('/')
        await expect.soft(loginPage.loginForm).toBeVisible()
    })
})



