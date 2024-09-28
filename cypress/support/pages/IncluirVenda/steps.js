import incluirTransacaoPageLocators from './locators'

class incluirVendaPageSteps {

    selecionarCliente() {

      incluirTransacaoPageLocators.dropDowns.selecioneCliente().select('Teste Automacao')
    }

    preencherValorTransacaoMesmoValorSaldoCliente() {

      incluirTransacaoPageLocators.inputs.valorTransacao().type('15000')
    }

    preencherValorTransacaoMenorValorSaldoCliente() {

      incluirTransacaoPageLocators.inputs.valorTransacao().type('10000')
    }

    preencherValorTransacaoMaiorValorSaldoCliente() {

      incluirTransacaoPageLocators.inputs.valorTransacao().type('20000')
    }

    clicarBotaoSalvar() {

      incluirTransacaoPageLocators.buttons.salvar().click()
    }

    validarVendaSucesso() {

      incluirTransacaoPageLocators.texts.vendaRealizadaComSucesso().should('be.visible')
    }

    validarVendaFalha() {

      incluirTransacaoPageLocators.texts.vendaRealizadaComSucesso().should('not.exist')
    }
  }

export default new incluirVendaPageSteps()