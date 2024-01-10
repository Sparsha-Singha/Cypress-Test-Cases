/// <reference types = "cypress"/>

describe('Validate case sensitivity & searching by word',()=>{
    

    it('with valid credential',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get('ul.oxd-main-menu').contains('leave',{matchCase:false}).click() //here
        cy.get('.oxd-topbar-body-nav > ul').contains(/^M\w+/).click() //here
    })

})