import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";


Given('I open Practice Automation Site', function(){
    cy.log('block 1')
    cy.visit('https://practicetestautomation.com/practice-test-login/')
})

When('I enter username and password', function(){
    cy.log('block 2')
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()

})

Then('Validate the Dashboard', function(){
    cy.log('block 3')
    cy.get('.post-title').should('have.text', 'Logged In Successfully')
    cy.get('.has-text-align-center').should('have.text', 'Congratulations student. You successfully logged in!')
})