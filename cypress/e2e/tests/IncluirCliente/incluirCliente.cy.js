import incluirClientePageSteps from '../../../support/pages/IncluirCliente/steps'
import listarClientePageSteps from '../../../support/pages/ListarCliente/steps'

describe('Testes da página Incluir Cliente', () => {

    beforeEach(() => {
      
        cy.login()
        cy.acessarPaginaIncluirCliente()
    })
  
    it("Cadastrar cliente com sucesso", () => {

        incluirClientePageSteps.preencherCampoNome()
        incluirClientePageSteps.preencherCampoCPF()
        incluirClientePageSteps.preencherCampoSaldoDisponivel()
        incluirClientePageSteps.clicarBotaoSalvar()
        incluirClientePageSteps.validarSucessoCadastroCliente()
        cy.acessarPaginaListarCliente()
        listarClientePageSteps.preencherCampoNome()
        listarClientePageSteps.clicarBotaoPesquisar()
        listarClientePageSteps.validarClienteTesteAutomacao()
    })

    it("Clicar no botão Salvar sem preencher o campo Nome", () => {

        incluirClientePageSteps.preencherCampoCPF()
        incluirClientePageSteps.preencherCampoSaldoDisponivel()
        incluirClientePageSteps.clicarBotaoSalvar()
        incluirClientePageSteps.validarTextoCampoObrigatorioNome()
    })

    it("Clicar no botão Salvar sem preencher o campo CPF", () => {

        incluirClientePageSteps.preencherCampoNome()
        incluirClientePageSteps.preencherCampoSaldoDisponivel()
        incluirClientePageSteps.clicarBotaoSalvar()
        incluirClientePageSteps.validarTextoCampoObrigatorioCpf()
    })

    it("Clicar no botão Salvar sem preencher o campo Saldo Disponível", () => {

        incluirClientePageSteps.preencherCampoNome()
        incluirClientePageSteps.preencherCampoCPF()
        incluirClientePageSteps.clicarBotaoSalvar()
        incluirClientePageSteps.validarFalhaCadastroCliente()
    })

    after(() => {

        cy.acessarPaginaListarCliente()
        cy.limparBase()
    });
})