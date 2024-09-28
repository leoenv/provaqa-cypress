import homePageLocators from './locators'
import loginPageLocators from '../Login/locators'
import incluirClientePageLocators from '../IncluirCliente/locators'
import listarClientePageLocators from '../ListarCliente/locators'
import incluirVendaPageLocators from '../IncluirVenda/locators'
import listarVendaPageLocators from '../ListarVenda/locators'

class homePageSteps {

    clicarBotaoSair() {

      homePageLocators.buttons.sair().click()
    }

    validarLogout() {

      loginPageLocators.inputs.login().should('be.visible')
    }

    clicarMenuInicio() {

      homePageLocators.menus.inicio().click()
    }

    validarAcessoMenuInicio() {

      homePageLocators.texts.bemVindoDesafio().should('be.visible')
    }

    selecionarMenuQA() {

      homePageLocators.menus.QA().realHover()
    }

    selecionarSubmenuClientes() {

      homePageLocators.submenus.clientes.clientes().realHover()
    }

    clicarSubmenuIncluirClientes() {

      homePageLocators.submenus.clientes.incluir().click()
    }

    clicarSubmenuListarClientes() {

      homePageLocators.submenus.clientes.listar().click()
    }

    selecionarSubmenuTransacoes() {

      homePageLocators.submenus.transacoes.transacoes().realHover()
    }

    clicarSubmenuIncluirTransacoes() {

      homePageLocators.submenus.transacoes.incluir().click()
    }

    clicarSubmenuListarTransacoes() {

      homePageLocators.submenus.transacoes.listar().click()
    }

    validarAcessoPaginaIncluirCliente() {

      incluirClientePageLocators.texts.incluirCliente().should('be.visible')
    }

    validarAcessoPaginaListarCliente() {

      listarClientePageLocators.texts.listarClientes().should('be.visible')
    }

    validarAcessoPaginaIncluirVenda() {

      incluirVendaPageLocators.texts.incluirTransacao().should('be.visible')
    }

    validarAcessoPaginaListarVenda() {

      listarVendaPageLocators.texts.listarTransacoes().should('be.visible')
    }
  }

export default new homePageSteps()