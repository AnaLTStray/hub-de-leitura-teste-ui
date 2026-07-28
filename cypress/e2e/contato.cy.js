describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('index.html')
  });
  it('Deve preencher formulário de contato com sucesso', () => {
    cy.get( '#name').type('Ana Letícia')
    cy.get ('#email').type('anateste@teste.com')
    cy.get ('#subject').select('Sugestões')
    cy.get ('#message').type('Esta é uma mensagem de teste.')
    cy.get ('#btn-submit').click()
    cy.contains('Contato enviado com sucesso!').should('exist')
  });
  
    it('Deve validar mensagem de erro ao enviar formulário sem preencher nome', () => {   
    cy.get( '#name').clear
    cy.get('#email').type('anateste@teste.com')
    cy.get('#subject').select('Sugestões')
    cy.get('#message').type('Esta é uma mensagem de teste.')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should ('contain', 'Por favor, preencha o campo Nome.')
  });

    it('Deve validar mensagem de erro ao enviar formulário sem preencher e-mail', () => {
    cy.get( '#name').type('Ana Letícia')
    cy.get('#email').clear
    cy.get('#subject').select('Sugestões')
    cy.get('#message').type('Esta é uma mensagem de teste.')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should ('contain', 'Por favor, preencha o campo E-mail.')
  });

    it('Deve validar mensagem de erro ao enviar formulário sem selecionar o assunto', () => {
    cy.get( '#name').type('Ana Letícia')
    cy.get('#email').type('anateste@teste.com')
    cy.get('#subject').clear
    cy.get('#message').type('Esta é uma mensagem de teste.')
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should ('contain', 'Por favor, selecione o Assunto.')
  });

    it('Deve validar mensagem de erro ao enviar formulário sem selecionar a mensagem', () => {
    cy.get( '#name').type('Ana Letícia')
    cy.get('#email').type('anateste@teste.com')
    cy.get('#subject').select('Sugestões')
    cy.get('#message').clear
    cy.get('#btn-submit').click()
    cy.get('#alert-container').should ('contain', 'Por favor, escreva sua Mensagem.')
  });

})