import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";


Given('User sent the request to get multiple users list', () => {

    cy.request({
        method: "GET",
        url: "https://reqres.in/api/users?page=2"
    }).as('getUsers')

})


Then('Users list should be displayed', () => {

    cy.get('@getUsers').then((response)=>{
        cy.get(response)
        expect(response.status).to.eq(200)
        expect(response.statusText).to.eq("OK")
    })

})


Given('User sent the request to create new user with {string} and job {string}', (name, job)=>{
        cy.request({
            method: "POST", 
            url: "https://reqres.in/api/users", 
            body: {
                "name": name,
                "job": job
            }
        }).as("createUser")
})

Then("User should be created with {string} and job {string}", (name, job)=>{

    cy.get('@createUser').then((response)=>{
        cy.log(response)
        expect(response.status).to.eq(201)
        expect(response.statusText).to.eq("Created")
        expect(response.body.name).to.eq(name)
        expect(response.body.job).to.eq(job)
    })

})