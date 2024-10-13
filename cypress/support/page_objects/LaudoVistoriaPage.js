class LaudoVistoriaPage {
    visit(url) {
      cy.visit(url);
    }
  
    preencherPlaca(placa) {
      cy.get('#placa').type(placa); // Ajuste o seletor conforme necessário
    }
  
    preencherRenavam(renavam) {
      cy.get('#renavam').type(renavam); // Ajuste o seletor conforme necessário
    }
  
    enviarPesquisar() {
      cy.contains('button','Pesquisar').click(); // Ajuste o seletor conforme necessário
    }
  }
  
  export default new LaudoVistoriaPage();
  