/// <reference types="cypress" />

describe('Login functionality', () => {


    it('Login with valid credentials', () => {
        cy.login('ghadgg@example.com', 'Password1!')
    })

    it('Verify hader options', () => {
        cy.login('ghadgg@example.com', 'Password1!')

        cy.get('[class="navbar navbar-light"]').each((header, index) => {
            const text = ['conduit', 'Home', 'New_Article', 'Settings', document.querySelector('[routerlinkactive="active"]')]

            cy.wrap(header).should('contain', text[index])
        })
    })
})