/// <reference types = "cypress"/>

describe('Validate finding element from parent to child',()=>{
    

    it('with valid credential',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(3) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body').find('li a').contains('Apply').click() //here
    })

})