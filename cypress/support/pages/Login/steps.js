import loginPageLocators from './locators'
import homePageLocators from '../Home/locators'

class loginPageSteps {

  acessarLoginPage() {

    cy.visit('/')
    loginPageLocators.inputs.login().should('be.visible')
  }

  preencherCampoLoginUsuarioValido() {

    loginPageLocators.inputs.login().type('admin')
  }

  preencherCampoLoginUsuarioInvalido() {

    loginPageLocators.inputs.login().type('aaaa')
  }

  preencherCampoPasswordSenhaValida() {

    loginPageLocators.inputs.password().type('admin')
  }

  preencherCampoPasswordSenhaInvalida() {

    loginPageLocators.inputs.password().type('aaaa')
  }

  clicarBotaoSignIn() {

    loginPageLocators.buttons.signIn().click()
  }

  validarLoginComSucesso() {

    homePageLocators.texts.bemVindoDesafio().should('be.visible')
  }

  validarErroLogin() {

    loginPageLocators.texts.credenciaisInvalidas().should('be.visible')
  }
}

export default new loginPageSteps()