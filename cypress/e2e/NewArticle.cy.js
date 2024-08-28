/// <reference types="cypress" />

import { NewArticlePage } from "../fixtures/POM/NewArticleSelectors"
import { generateRandomString } from "../support/utility"

describe('New article', () => {


    it('Add new article', () => {

        const uniqueTitle = generateRandomString(3)


        cy.login('ghadgg@example.com', 'Password1!')

        cy.get('[ng-reflect-router-link="/editor"]').click()
        cy.get(NewArticlePage.title).type(uniqueTitle)
        cy.get(NewArticlePage.description).type('Sinopsis')
        cy.get(NewArticlePage.body).type('Roman se bavi temama unutrašnjih sukoba, traume, i potrage za identitetom. Likovi se bore sa sopstvenim demonima i sa spoljnim pritiscima, dok se kroz naraciju postavlja pitanje moralnosti i pravde u svetu koji često deluje nemilosrdno. Istražuje dubine ljudske psihe i traži svetlo u tami života.')
        cy.get(NewArticlePage.tags).type('#roman', '#psihodrama')
        cy.get(NewArticlePage.newArticleButton).click()

        cy.get('.btn.btn-sm.btn-outline-danger')
            .contains('Delete Article')
            .click();


    })
})
