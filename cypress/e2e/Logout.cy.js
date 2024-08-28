/// <reference types="cypress" />

describe('Logout', () => {


    it('Logout with assertions', () => {
        cy.login('ghadgg@example.com', 'Password1!')

        cy.logout()
        cy.url().should('equal', 'http://localhost:4200/')
    })


})