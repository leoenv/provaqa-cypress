import loginPageSteps from './pages/Login/steps'
import homePageSteps from './pages/Home/steps'
import incluirClientePageSteps from './pages/IncluirCliente/steps'
import listarClientePageSteps from './pages/ListarCliente/steps'

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Cypress.Commands.add('login', () => {

    loginPageSteps.acessarLoginPage()
    loginPageSteps.preencherCampoLoginUsuarioValido()
    loginPageSteps.preencherCampoPasswordSenhaValida()
    loginPageSteps.clicarBotaoSignIn()
})

Cypress.Commands.add('acessarPaginaIncluirCliente', () => {

    cy.wait(2000)
    homePageSteps.selecionarMenuQA()
    homePageSteps.selecionarSubmenuClientes()
    homePageSteps.clicarSubmenuIncluirClientes()
    homePageSteps.validarAcessoPaginaIncluirCliente()
})

Cypress.Commands.add('acessarPaginaListarCliente', () => {

    cy.wait(2000)
    homePageSteps.selecionarMenuQA()
    homePageSteps.selecionarSubmenuClientes()
    homePageSteps.clicarSubmenuListarClientes()
    homePageSteps.validarAcessoPaginaListarCliente()
})

Cypress.Commands.add('acessarPaginaIncluirVenda', () => {

    cy.wait(2000)
    homePageSteps.selecionarMenuQA()
    homePageSteps.selecionarSubmenuTransacoes()
    homePageSteps.clicarSubmenuIncluirTransacoes()
    homePageSteps.validarAcessoPaginaIncluirVenda()
})

Cypress.Commands.add('cadastrarCliente150Saldo', () => {

    incluirClientePageSteps.preencherCampoNome()
    incluirClientePageSteps.preencherCampoCPF()
    incluirClientePageSteps.preencherCampoSaldoDisponivel()
    incluirClientePageSteps.clicarBotaoSalvar()
    incluirClientePageSteps.validarSucessoCadastroCliente()
})

Cypress.Commands.add('limparBase', () => {

    listarClientePageSteps.clicarBotaoLimparBase()
    listarClientePageSteps.validarSucessoLimparBase()
})