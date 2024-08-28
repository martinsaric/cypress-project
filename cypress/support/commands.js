// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { loginPage } from "../fixtures/POM/LoginPageSelectors"
import { signUpPage } from "../fixtures/POM/SignUpPageSelectors"
import { generateRandomString } from "./utility"



Cypress.Commands.add('login', (email, password) => {
    cy.visit('http://localhost:4200/');
    cy.get('[routerlink="/login"]').click()
    cy.get(loginPage.email).type(email)
    cy.get(loginPage.password).type(password)
    cy.get(loginPage.loginButton).click()
    cy.url().should('eq', 'http://localhost:4200/')
})

Cypress.Commands.add('signup', (password) => {

    const uniqueUsername = generateRandomString(6);
    const uniqueEmail = `${uniqueUsername}@example.com`;

    cy.visit('http://localhost:4200/');
    cy.get('[routerlink="/register"]').click()
    cy.get(signUpPage.username).type(uniqueUsername)
    cy.get(signUpPage.email).type(uniqueEmail)
    cy.get(signUpPage.password).type(password)
    cy.get(signUpPage.signUpButton).click()
    cy.url().should('eq', 'http://localhost:4200/')
})

Cypress.Commands.add('logout', () => {
    cy.get('[routerlink="/settings"]').click()

        cy.get('[class="btn btn-outline-danger"]')
        .contains('logout')
        .click()
})