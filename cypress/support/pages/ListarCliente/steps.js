import listarClientePageLocators from './locators'

class listarClientePageSteps {

    preencherCampoNome() {

      listarClientePageLocators.inputs.nome().type('Teste Automacao')
    }

    clicarBotaoPesquisar() {

      listarClientePageLocators.buttons.pesquisar().click()
    }

    clicarBotaoLimparBase() {

      listarClientePageLocators.buttons.limparBase().click()
    }

    validarClienteTesteAutomacao() {

      listarClientePageLocators.texts.clienteTesteAutomacao().should('be.visible')
    }

    validarSucessoLimparBase() {

      listarClientePageLocators.texts.sucessoLimpaBase().should('be.visible')
    }
  }

export default new listarClientePageSteps()