import incluirVendaPageSteps from '../../../support/pages/IncluirVenda/steps'

describe('Testes da página Incluir Venda', () => {
    
    beforeEach(() => {
      
        cy.login()
        cy.acessarPaginaListarCliente()
        cy.limparBase()
        cy.acessarPaginaIncluirCliente()
        cy.cadastrarCliente150Saldo()
        cy.acessarPaginaIncluirVenda()
    })
  
    it("Incluir transação de valor igual ao saldo do cliente", () => {

        incluirVendaPageSteps.selecionarCliente()
        incluirVendaPageSteps.preencherValorTransacaoMesmoValorSaldoCliente()
        incluirVendaPageSteps.clicarBotaoSalvar() 
        incluirVendaPageSteps.validarVendaSucesso()
    })

    it("Incluir transação de valor menor ao saldo do cliente", () => {

        incluirVendaPageSteps.selecionarCliente()
        incluirVendaPageSteps.preencherValorTransacaoMenorValorSaldoCliente()
        incluirVendaPageSteps.clicarBotaoSalvar() 
        incluirVendaPageSteps.validarVendaSucesso()
    })

    it("Incluir transação de valor maior ao saldo do cliente", () => {

        incluirVendaPageSteps.selecionarCliente()
        incluirVendaPageSteps.preencherValorTransacaoMaiorValorSaldoCliente()
        incluirVendaPageSteps.clicarBotaoSalvar()
        incluirVendaPageSteps.validarVendaFalha()
    })
})