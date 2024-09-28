import incluirClientePageLocators from './locators'

class incluirClientePageSteps {

    preencherCampoNome() {

      incluirClientePageLocators.inputs.nome().type('Teste Automacao')
    }

    preencherCampoCPF() {

      incluirClientePageLocators.inputs.cpf().type('333.333.333-33')
    }

    preencherCampoSaldoDisponivel() {

      incluirClientePageLocators.inputs.saldoDisponivel().type('15000')
    }

    clicarBotaoSalvar() {

      incluirClientePageLocators.buttons.salvar().click()
    }

    validarSucessoCadastroCliente() {

      incluirClientePageLocators.texts.clienteSalvoSucesso().should('be.visible')
    }

    validarFalhaCadastroCliente() {

      incluirClientePageLocators.texts.clienteSalvoSucesso().should('not.exist')
    }

    validarTextoCampoObrigatorioNome() {

      incluirClientePageLocators.texts.campoObrigatorioNome().should('be.visible')
    }

    validarTextoCampoObrigatorioCpf() {

      incluirClientePageLocators.texts.campoObrigatorioCpf().should('be.visible')
    }
}

export default new incluirClientePageSteps()