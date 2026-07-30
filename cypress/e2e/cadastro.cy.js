///<reference types="cypress"/>

import { faker } from '@faker-js/faker';
import cadastroPage from '../support/pages/cadastro-page';

describe ('Funcionalidade: Cadastro no Hub de Leitura', () => {

  beforeEach(() => {
    cadastroPage.visitarPaginaCadastro()

  });

    it('Deve fazer cadastro com sucesso, usando função JavaScript', () => {
       let email = `ana${Date.now()}@teste.com`
        cy.get('#name').type('Ana Letícia')
        cy.get('#email').type(email)
        cy.get('#phone').type('11987654321')
        cy.get('#password').type('senha123')
        cy.get('#confirm-password').type('senha123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')


    });

    it('Deve fazer cadastro com sucesso, usando Faker', () => {
       let email = `ana${Date.now()}@teste.com`
        cy.get('#name').type('Ana Letícia')
        cy.get('#email').type(email)
        cy.get('#phone').type('11987654321')
        cy.get('#password').type('senha123')
        cy.get('#confirm-password').type('senha123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
});

it('Deve preencher cadastro com sucesso - usando comando customizado', () => {
  let email = `ana${Date.now()}@teste.com`
  cy.preencherCadastro('Ana Letícia', email, '11987654321', 'senha123')

   cy.url().should('include', 'dashboard')
})

it('Deve preencher cadastro com sucesso - usando comando customizado', () => {
  let email = `ana${Date.now()}@teste.com`
  let nome = faker.person.fullName ({sex: 'female'})
  cy.preencherCadastro(nome, email, '11987654321', 'senha123')

   cy.url().should('include', 'dashboard')
})

it('Deve fazer cadastro com sucesso - usando Page Object', () => {
  let email = `ana${Date.now()}@teste.com` 
  cadastroPage.preencherCadastro('Ana Letícia', email, '11987654321', 'senha123', 'senha123') 
  cy.url().should('include', 'dashboard')
})  

it('Deve validar mensagem ao tentar cadastrar sem preencher nome', () => {
  let email = `ana${Date.now()}@teste.com`
  cadastroPage.preencherCadastro('', email, '11987654321', 'senha123', 'senha123')
  cy.get(':nth-child(1) > .invalid-feedback')
})

}); 