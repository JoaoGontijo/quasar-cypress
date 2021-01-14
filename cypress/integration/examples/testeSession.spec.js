/// <reference types="cypress" />

describe('Teste Session', () => {
  
  it('Verifica existencia do usuario', () => {
    cy.visit('/User')
    cy.window()
    .its("sessionStorage")
    .invoke("getItem", "usuario")
    .should("exist");
  })
})
