/// <reference types="cypress" />

describe('Sign-up', () => {

  it('Sign-up with valid credentials', () => {


    cy.signup('Password1!')
  })

})
