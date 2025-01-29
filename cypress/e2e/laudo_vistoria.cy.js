import LaudoVistoriaPage from '../support/page_objects/LaudoVistoriaPage';

describe('CT01 - Teste de Consulta de Laudo de Vistoria', () => {
  beforeEach(() => {
    cy.fixture('dados').then((dados) => {
      LaudoVistoriaPage.visit(dados.url);
    });
  });

  it('1. Habilitar pesquisa com o campo Chassi',() => {
    cy.get('#toggleCheckbox').check()
    cy.get('#chassi').should('be.visible')
  })

  it('2. Habilitar pesquisa com o campo Chassi',() => {
    cy.get('#toggleCheckbox').check()
    cy.get('#chassi').should('be.visible')
    cy.get('#toggleCheckbox').uncheck()
    cy.get('#chassi').should('not.be.visible')
    cy.get('#placa').should('be.visible')
    cy.get('#renavam').should('be.visible')
  })

  
  it('3. Validar o titulo da aplicação',()=>{
    cy.get('.cor-titulo').contains('Consulta Laudo de Vistorias').should('be.visible')
  })

  it('4. Validar exibição do checkbox de Consulta com Chassi',()=>{
    cy.get('label').contains('Buscar laudo usando o CHASSI')
    cy.get('#toggleCheckbox').should('not.be.checked')
  })

  it('5. Deve preencher os campos e pesquisar', () => {
    cy.fixture('dados').then((dados) => {
      LaudoVistoriaPage.preencherPlaca(dados.placa);
      LaudoVistoriaPage.preencherRenavam(dados.renavam);
      LaudoVistoriaPage.enviarPesquisar();
      
      // Verificação do resultado (ajuste conforme o resultado esperado)
      cy.get('.alert').should('be.visible')
    });
  });
});
