import { Locator, Page } from "@playwright/test";

export class LoginPage {

    readonly page: Page
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly loginButton: Locator
    readonly loginErrorMessage: Locator
    readonly loginForm: Locator
    readonly errorMessageTxt: string

    constructor(page: Page){
        this.page = page
        this.usernameInput = page.locator('#user-name')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.locator('#login-button')
        this.loginErrorMessage = page.locator('[data-test=error]')
        this.loginForm = page.locator('.login_wrapper')
        this.errorMessageTxt = 'Epic sadface: Username and password do not match any user in this service'
    }

    get firstName(){return this.page.locator('#user-name')}


    async  visit() {

        await this.page.goto('/')
    }

    async logIn(username: string, password: string){

        await this.usernameInput.type(username)
        await this.passwordInput.type(password)
        await this.loginButton.click()
    }
}
