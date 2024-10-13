import LaudoVistoriaPage from '../support/page_objects/LaudoVistoriaPage';

describe('Teste de Consulta de Laudo de Vistoria', () => {
  beforeEach(() => {
    cy.fixture('dados').then((dados) => {
      LaudoVistoriaPage.visit(dados.url);
    });
  });

  it('Deve preencher os campos e pesquisar', () => {
    cy.fixture('dados').then((dados) => {
      LaudoVistoriaPage.preencherPlaca(dados.placa);
      LaudoVistoriaPage.preencherRenavam(dados.renavam);
      LaudoVistoriaPage.enviarPesquisar();
      
      // Verificação do resultado (ajuste conforme o resultado esperado)
      cy.get('.alert').should('be.visible')
    });
  });
});
