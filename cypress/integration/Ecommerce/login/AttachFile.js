import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

let file = 'CHAPTER_2.pptx'

Given('I open Automation Exercise Site', () => {
    cy.log('block-1')
    cy.visit('https://www.automationexercise.com/login')
    cy.get('.login-form h2').should('have.text', 'Login to your account')
    cy.get('[data-qa="login-email"]').type('gauri@gmail.com')
    cy.get('[data-qa="login-password"]').type('Gauri99')
    cy.get('[data-qa="login-button"]').click()
})


Then('Validate the Home Page', () => {

    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
    cy.get('.active > :nth-child(1) > h2').should('have.text', 'Full-Fledged practice website for Automation Engineers')
})


Given('Open the Cantact Page', () => {
    cy.get('[href="/contact_us"]').click()
    cy.get('.title.text-center').eq(1).should('have.text', 'Get In Touch')
})

When('Add your details', () => {
    cy.get('[data-qa="name"]').type('Gauri')
    cy.get('[data-qa="email"]').type('gauri@gmail.com')
    cy.get('[data-qa="subject"]').type('Inquiry')
    cy.get('[id="message"]').type('To Know more info about your site')
    cy.get('[name="upload_file"]').attachFile(file)
    cy.get('[name="submit"]').click()

})

Then('Validate the Success msg', () => {
    cy.get('.status.alert.alert-success').should("have.text", "Success! Your details have been submitted successfully.")
})