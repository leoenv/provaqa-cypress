const homePageLocators = {

  menus: {

    inicio: () => cy.get(':nth-child(1) > li > a'),
    QA: () => cy.get('[title="QA"]'),
  },

  submenus: {

    clientes: {

      clientes: () => cy.get('[title="Clientes"]'),
      incluir: () => cy.get('[title="Incluir"]'),
      listar: () => cy.get('[title="Listar"]'),
    },
    
    transacoes: {

      transacoes: () => cy.xpath('//a[@title="Transações"]'),
      incluir: () => cy.xpath('//a[@href="/desafioqa/incluirVenda"]'),
      listar: () => cy.xpath('//a[@href="/desafioqa/listarVenda"]'),
    } 
  },

  buttons: {

    sair: () => cy.get('.btn'),
  },

  texts: {

    bemVindoDesafio: () => cy.get('.page-title'),
  }
}

export default homePageLocators