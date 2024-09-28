import homePageSteps from '../../../support/pages/Home/steps'

describe('Testes da página Home', () => {
    
    beforeEach(() => {
      
        cy.login()
    })
  
    it("Realizar logout", () => {

        homePageSteps.clicarBotaoSair()
        homePageSteps.validarLogout()
    })

    it("Acessar home através do botão início", () => {

        homePageSteps.clicarMenuInicio()
        homePageSteps.validarAcessoMenuInicio()
    })

    it("Acessar página Incluir Cliente", () => {

        homePageSteps.selecionarMenuQA()
        homePageSteps.selecionarSubmenuClientes()
        homePageSteps.clicarSubmenuIncluirClientes()
        homePageSteps.validarAcessoPaginaIncluirCliente()
    })

    it("Acessar página Listar Cliente", () => {

        homePageSteps.selecionarMenuQA()
        homePageSteps.selecionarSubmenuClientes()
        homePageSteps.clicarSubmenuListarClientes()
        homePageSteps.validarAcessoPaginaListarCliente()
    })

    it("Acessar página Incluir Venda", () => {

        homePageSteps.selecionarMenuQA()
        homePageSteps.selecionarSubmenuTransacoes()
        homePageSteps.clicarSubmenuIncluirTransacoes()
        homePageSteps.validarAcessoPaginaIncluirVenda()
    })

    it("Acessar página Listar Venda", () => {

        homePageSteps.selecionarMenuQA()
        homePageSteps.selecionarSubmenuTransacoes()
        homePageSteps.clicarSubmenuListarTransacoes()
        homePageSteps.validarAcessoPaginaListarVenda()
    })
})