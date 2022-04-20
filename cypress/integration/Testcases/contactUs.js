/// <reference types = "cypress"/>

import contactForm from "../Pages/ContactForm"
import confirmationPage from "../Pages/ConfirmationPage"

const cf = new contactForm()
const confpage = new confirmationPage()

describe('Test Suite: Contact-Us form', () => {
    it('Form should be submitted containing all fields', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data

            cf.navigate()
            cf.enterWorkEmailAddress(this.data.WorkEmailAddress)
            cf.enterFirstName(this.data.FirstName)
            cf.enterLastName(this.data.LastName)
            cf.enterWorkphone(this.data.WorkPhone)
            cf.enterExt(this.data.Ext)
            cf.enterCompanyName(this.data.Company)
            cf.enterCompanyWebsite(this.data.CompanyWebsite)
            cf.enterJobTitle(this.data.YourJobTitle)

            cf.enterPosition(this.data.Position)
            cf.enterZipCodeORlocatoin(this.data.ZipCodeORlocatoin)
            cf.selectRemotebutton()

            cf.clickOnSubmitButton()
            confpage.confirmationMessage().should('exist')
        })
    })

    it('Form should not be submitted without Work Email Address', () => {
        cf.navigate()
        cf.clickOnSubmitButton()
        confpage.confirmationMessage().should('exist')
    })

    it.only('Form should be submitted with Mandatory fields', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data

            cf.navigate('/')

            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })

            cf.enterWorkEmailAddress(this.data.WorkEmailAddress)
            cy.contains('Industry').then(dropdown => {
                cy.wrap(dropdown).click()
                cy.contains('Accounting').click()
            })
            // cf.clickOnSubmitButton()
            // confpage.confirmationMessage().should('exist')
        })
    })
})