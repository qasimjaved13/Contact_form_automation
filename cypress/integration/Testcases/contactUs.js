/// <reference types = "cypress"/>

import contactForm from "../../Pages/ContactForm"
import confirmationPage from "../../Pages/ConfirmationPage"

const cf = new contactForm()
const confpage = new confirmationPage()

describe('Test Suite: Contact-Us form', () => {
    it('Form should be submitted containing all fields', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data

            cf.navigate()

            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            })

            cf.enterWorkEmailAddress(this.data.WorkEmailAddress)
            cf.enterFirstName(this.data.FirstName)
            cf.enterLastName(this.data.LastName)
            cf.enterWorkphone(this.data.WorkPhone)
            cf.enterExt(this.data.Ext)
            cf.enterCompanyName(this.data.Company)
            cf.enterCompanyWebsite(this.data.CompanyWebsite)
            cf.enterJobTitle(this.data.YourJobTitle)
            cf.selectIndustry(this.data.Industry)
            cf.enterPosition(this.data.Position)
            cf.enterZipCodeORlocatoin(this.data.ZipCodeORlocatoin)
            cf.selectRemotebutton()
            cf.clickOnSubmitButton()
            confpage.confirmationMessage().should('exist')
        })
    })

    it('Form should not be submitted without Work Email Address', () => {
        cf.navigate()

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cf.clickOnSubmitButton()
        cf.emailrequiredvalidation().should('exist')
    })

    it('Form should be submitted with Mandatory fields', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data

            cf.navigate('/')

            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })

            cf.enterWorkEmailAddress(this.data.WorkEmailAddress)
            cf.clickOnSubmitButton()
            confpage.confirmationMessage().should('exist')
        })
    })

    it('Verify sections labels',()=>{
        cf.navigate('/')

            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            })

        cy.contains('Top talent is only 30-seconds away!').should('exist')
        cy.contains(' What position(s) are you hiring for? ').should('exist')
    })

    it('Terms and conditions link should be working fine',()=>{
        cf.navigate('/')

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('.text-subtitle2 > [href="/terms-and-conditions"]').click()
        cy.url().should('be.equal', 'https://uat.jobot.com/terms-and-conditions')

    })

    it('Privacy Polcy link should be working fine',()=>{
        cf.navigate('/')

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.get('.text-subtitle2 > [href="/privacy-policy"]').click()
        cy.url().should('be.equal', 'https://uat.jobot.com/privacy-policy')

    })
})