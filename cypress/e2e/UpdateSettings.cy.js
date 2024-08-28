/// <reference types="cypress" />

describe('Update Settings', () => {


    it('Update bio', () => {
        cy.login('ghadgg@example.com', 'Password1!')

        cy.get('[routerlink="/settings"]').should('contain', 'Settings').click()

        cy.get('[placeholder="Short bio about you"]').type('Martin Saric - Buduci QA Engineer')

        cy.get('[class="btn btn-lg btn-primary pull-xs-right"]').click()

        cy.get('[class="col-xs-12 col-md-10 offset-md-1"]')
        .children()
        .eq(2)
        .should('have.text', 'Martin Saric - Buduci QA Engineer')
    })

    
})