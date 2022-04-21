/// <reference types = "cypress"/>

import contactForm from "../../Pages/ContactForm"
import confirmationPage from "../../Pages/ConfirmationPage"

const cf = new contactForm()
const confpage = new confirmationPage()

describe('Test Suite: Contact-Us form', () => {

    beforeEach(() => {
        cf.navigate()
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })

    it('Form should be submitted containing all fields', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data
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
            cf.entertellus(this.data.tellusgoals)
            cf.clickOnSubmitButton()
            confpage.confirmationMessage().should('exist')
        })
    })

    it('Form should not be submitted without Mandatory fields', () => {
        cf.clickOnSubmitButton()
        cf.emailrequiredvalidation().should('exist')
    })

    it('Form should be submitted without non-mandatory fields', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data
            cf.enterWorkEmailAddress(this.data.WorkEmailAddress)
            cf.clickOnSubmitButton()
            confpage.confirmationMessage().should('exist')
        })
    })

    it('Verify Headers labels', () => {
        cf.TopHeadersLabels().should('exist')
        cf.BelowHeadersLabels().should('exist')
    })

    it('Terms and conditions link should be working fine', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data
            cf.termsAndConditionlink()
            cy.url().should('be.equal', this.data.TermsAndConditionPageURL)
        })
    })

    it('Privacy Polcy link should be working fine', () => {
        cy.fixture('testdata').then(function (data) {
            this.data = data
            cf.privacyAndPolicylink()
            cy.url().should('be.equal', this.data.PrivacyAndPolicyPageURL)
        })
    })
})