/// <reference types = "cypress"/>
import { expect } from 'chai';

describe('Assertion Test with Expect',()=>{
    
    it('Check url and title',()=>{
        
        cy.visit('https://www.google.com/')

        let PageName = 'Home Page'
        
        expect(PageName).to.be.equal('Home Page') 
        
        expect(PageName).to.be.a('string')
        
        expect(PageName).to.have.length.of.at.most(10)

        

        let Person={
            Name: 'Sparsha',
            Id: 'ASHH'
        }

        expect(Person).to.have.property('Id','ASHH').and.to.have.length.of.at.most(4)
        
        expect(Person).to.have.property('Name').to.be.a('string')

        let EmployeeIds = [1,2,3,4,5]

        expect(EmployeeIds).to.have.ordered.members([1,2,3,4,5])
        expect(EmployeeIds).to.include(3)  //single character check
        expect(EmployeeIds).to.include.members([5,3])  //multiple character check
        
    })
})