/// <reference types = "cypress"/>

describe('Assertion-BDD',()=>{
    beforeEach('visiting the orangehrm website',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
    it('Check url and title',()=>{
        cy.url().should('include','auth/login')
        cy.title('eq','OrangeHRM')
    })
    it('Check rest of the page',()=>{
        cy.get('.oxd-text--h5').should('have.text','Login')
        cy.get('.oxd-sheet > :nth-child(1)').should('include.text','Admin')
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper').should('include.text','Username')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.attr','placeholder','Username')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.attr','placeholder','Password')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible')
        cy.get('.oxd-button').should('have.css','background-color','rgb(255, 123, 29)')
    })
})