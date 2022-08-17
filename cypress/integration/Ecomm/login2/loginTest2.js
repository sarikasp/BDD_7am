import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";


Given('visit ecommerce Site', () => {
    cy.log('block-1')
    cy.visit('https://practicetestautomation.com/practice-test-login/')
})

When('enter the username', (dataTable) => {
    dataTable.hashes().forEach(element => {
        cy.log('block-1')
        cy.get('#username').type(element.username)
    })

})

And('enter the password', (dataTable) => {
    cy.log('block-1')
    dataTable.hashes().forEach(element => {
        cy.get('#password').type(element.password)
    })

})

And('Click on login button', () => {
    cy.log('block-1')
    cy.get('#submit').click()
})

Then('Validate Dashboard', () => {
    cy.log('block-1')
    cy.get('.post-title').should('have.text', 'Logged In Successfully')
})



Given('visit Practice Automation Testing Site', () => {
    cy.log('block-1')
    cy.visit('https://practice.automationtesting.in/my-account/')
})

When('User login with {string} and {string}', (username, password)=>{
    cy.get('#username').type(username)
    cy.get('#password').type(password)

})

And('Click on the login button', () => {
    cy.log('block-1')
    cy.get('[name="login"]').click()
})

Then('Dashboard should be visible', ()=>{
    cy.get('.is-active> a').should('have.text', 'Dashboard')
})
