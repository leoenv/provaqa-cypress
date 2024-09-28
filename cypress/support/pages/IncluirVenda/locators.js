const incluirVendaPageLocators = {

  inputs: {

    valorTransacao: () => cy.get('#valorTransacao'),
  },

  buttons: {

    salvar: () => cy.get('#botaoSalvar'),
  },

  dropDowns: {

    selecioneCliente: () => cy.xpath('//select[@id="cliente"]'),
    opcaoClienteTesteAutomacao: () => cy.contains('option', 'Teste Automacao'),
  },

  texts: {

    incluirTransacao: () => cy.contains('h1', 'Incluir Transacao'),
    vendaRealizadaComSucesso: () => cy.get('strong')
  }
}

export default incluirVendaPageLocators