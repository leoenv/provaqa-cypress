const incluirClientePageLocators = {

  inputs: {

    nome: () => cy.get('#nome'),
    cpf: () => cy.get('#cpf'),
    saldoDisponivel: () => cy.get('#saldoCliente'),
  },

  buttons: {

    salvar: () => cy.get('#botaoSalvar'),
  },

  dropDowns: {

    ativo: () => cy.get('#status'),
    opcaoInativo: () => cy.contains('option', 'Inativo')
  },

  texts: {

    incluirCliente: () => cy.contains('h1', 'Incluir Cliente'),
    clienteSalvoSucesso: () => cy.get('strong'),
    campoObrigatorioNome: () => cy.xpath('//small[@data-bv-for="nome"]'),
    campoObrigatorioCpf: () => cy.xpath('//small[@data-bv-for="cpf"]'),
  }
}

export default incluirClientePageLocators