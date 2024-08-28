/// <reference types="cypress" />

import { NewArticlePage } from "../../fixtures/POM/NewArticleSelectors"
import { generateRandomString } from "../../support/utility"


describe('API flow', () => {


    it('Login', () => {

        cy.intercept('POST', 'https://api.realworld.io/api/users/login').as('postLogin')
        cy.intercept('GET', 'https://api.realworld.io/api/tags').as('getTags')
        cy.intercept('GET', 'https://api.realworld.io/api/articles?limit=10&offset=0').as('getArticles')

        cy.login('ghadgg@example.com', 'Password1!')

        cy.wait('@postLogin')
        cy.wait('@getTags')
        cy.wait('@getArticles')
      

    })

    it('New Article', () => {

        const uniqueTitle = generateRandomString(3)

        cy.intercept('POST', 'https://api.realworld.io/api/articles/').as('postArticle')
        cy.intercept('GET', 'https://api.realworld.io/api/articles/*').as('getComments')

        cy.login('ghadgg@example.com', 'Password1!')
        cy.get('[ng-reflect-router-link="/editor"]').click()
        cy.get(NewArticlePage.title).type(uniqueTitle)
        cy.get(NewArticlePage.description).type('Citat')
        cy.get(NewArticlePage.body).type('Posle hiljade kilometara predjenih na kaldrmi, sve sto nam ostaje je bos hod po livadi')
        cy.get(NewArticlePage.tags).type('#citat', '#filozofija')
        cy.get(NewArticlePage.newArticleButton).click()

        cy.wait('@postArticle').then(apiLog => {
            console.log(apiLog)
            expect(apiLog.response.statusCode).to.equal(201)
            expect(apiLog.response.body.article.title).to.equal(uniqueTitle)
            expect(apiLog.response.statusMessage).to.equal("Created")
        })

        cy.wait('@getComments')
    })

})