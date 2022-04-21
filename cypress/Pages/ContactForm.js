class contactForm {

    navigate(){
        cy.visit('/')
    }
    enterWorkEmailAddress(emailaddress) {
        cy.contains('Work Email Address').type(emailaddress)
    }
    enterFirstName(Fname) {
        cy.contains('First name').type(Fname)
    }
    enterLastName(Lname) {
        cy.contains('Last name').type(Lname)
    }
    enterWorkphone(workphone) {
        cy.contains('Work Phone').type(workphone)
    }
    enterExt(ext) {
        cy.contains('Ext.').type(ext)
    }
    enterCompanyName(company) {
        cy.contains('Company').type(company)
    }
    enterCompanyWebsite(companyweb) {
        cy.contains('Company Website').type(companyweb)
    }
    enterJobTitle(jobtitle) {
        cy.contains('Your Job Title').type(jobtitle)
    }

    selectIndustry(indus){
        cy.contains('Industry').then(industrydropdown => {
            cy.wrap(industrydropdown).click()
            cy.contains(indus).click()
        })
    }

    enterPosition(position) {
        cy.contains('Position(s)').type(position)

    }
    enterZipCodeORlocatoin(zip) {
        cy.contains('Zip code or location').type(zip)
    }
    entertellus(tellus) {
        cy.contains('Tell us how we can help you meet your hiring goals').type(tellus)
    }
    selectRemotebutton() {
        cy.contains('Remote position').click()
    }
    clickOnSubmitButton() {
        cy.contains('Submit to Jobot').click()
    }

    emailrequiredvalidation() {
        return cy.contains('Email required')
    }

    TopHeadersLabels(){
        return cy.contains('Top talent is only 30-seconds away!')
    }

    BelowHeadersLabels(){
        return cy.contains('What position(s) are you hiring for?')
    }

    termsAndConditionlink(){
        cy.get('.text-subtitle2 > [href="/terms-and-conditions"]').click()
    }

    privacyAndPolicylink(){
        cy.get('.text-subtitle2 > [href="/privacy-policy"]').click()
    }
}
export default contactForm