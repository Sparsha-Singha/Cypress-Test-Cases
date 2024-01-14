/// <reference types = "cypress"/>

describe('Automate checkboxes & Radio Buttons', ()=>{

    beforeEach('visit the jotform website',()=>{
        cy.visit('https://www.jotform.com/build/240129365513452?s=templates#preview')
    })
    it('',()=>{
        cy.get('#first_1').type('Sparsha')
        cy.get('#last_1').type('Singha')
        cy.get('#input_4').type('NSTU')
        cy.get('#input_6').type('ICE')
        cy.get('#input_3').select('Other')
        cy.get('#input_5').select('Other')
        cy.get('#input_7').select('4 year')
    })
    it('Validate checkboxes',()=>{           //here
        cy.get('input[type="checkbox"]').check()
        cy.get('input[type="checkbox"]').uncheck()
        //specific checkbox
        cy.get('input[type="checkbox"]').check('Industry') 
    })
    it('Validate radio buttons',()=>{
        cy.get('input[type="radio"]').check()
        cy.get('input[value="Yes"]').check()
    })
    
})
