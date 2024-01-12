/// <reference types = "cypress"/>

describe('validate select based dropdown', ()=>{

    before('visit & Login the website', ()=>{
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })
    it('Select from dropdown', ()=>{
        cy.get('.product_sort_container').select('Price (high to low)')
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.get('.product_sort_container').select('Name (A to Z)')
<<<<<<< HEAD
        cy.get('.product_sort_container').select('Name (Z to A)');
=======
>>>>>>> 426b72e (4th commit)
    })
})
