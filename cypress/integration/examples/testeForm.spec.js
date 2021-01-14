/// <reference types="cypress" />

describe('Teste João', () => {
  
  it('preencher campos do formulario', () => {

    cy.visit('/')
    cy.get('[data-cy=nome]').type('Joao')
    cy.get('[data-cy=sobrenome]').type('Gontijo')
    cy.get('[data-cy=idade]').type('22')
    cy.get('[data-cy=btn-cadastrar]').click()

  })
})
