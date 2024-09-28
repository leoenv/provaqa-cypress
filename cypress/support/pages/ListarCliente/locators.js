const listarClientePageLocators = {

  inputs: {

    nome: () => cy.get('.col-md-6 > .form-control'),
  },

  buttons: {

    pesquisar: () => cy.get('.col-md-1 > .btn'),
    limparBase: () => cy.get('.col-md-2 > .btn')
  },

  texts: {

    listarClientes: () => cy.contains('h1', 'Listar Clientes'),
    clienteTesteAutomacao: () => cy.contains('td', 'Teste Automacao'),
    sucessoLimpaBase: () => cy.get('#alertMessage > strong')
  }
}

export default listarClientePageLocators