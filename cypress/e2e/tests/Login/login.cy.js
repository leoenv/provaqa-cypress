import loginPageSteps from '../../../support/pages/Login/steps'

describe('Testes da página Login', () => {
    
    beforeEach(() => {
      
        loginPageSteps.acessarLoginPage()
    })
  
    it("Realizar login com sucesso", () => {

        loginPageSteps.preencherCampoLoginUsuarioValido()
        loginPageSteps.preencherCampoPasswordSenhaValida()
        loginPageSteps.clicarBotaoSignIn()
    })

    it("Clicar no botão SignIn inserindo um login válido e uma senha inválida", () => {

        loginPageSteps.preencherCampoLoginUsuarioValido()
        loginPageSteps.preencherCampoPasswordSenhaInvalida()
        loginPageSteps.clicarBotaoSignIn()
        loginPageSteps.validarErroLogin()
    })

    it("Clicar no botão SignIn inserindo um login inválido e uma senha válida", () => {

        loginPageSteps.preencherCampoLoginUsuarioInvalido()
        loginPageSteps.preencherCampoPasswordSenhaValida()
        loginPageSteps.clicarBotaoSignIn()
        loginPageSteps.validarErroLogin()
    })

    it("Clicar no botão SignIn inserindo um login válido com o campo senha em branco", () => {

        loginPageSteps.preencherCampoLoginUsuarioValido()
        loginPageSteps.clicarBotaoSignIn()
        loginPageSteps.validarErroLogin()
    })

    it("Clicar no botão SignIn inserindo uma senha válida com o campo login em branco", () => {

        loginPageSteps.preencherCampoPasswordSenhaValida()
        loginPageSteps.clicarBotaoSignIn()
        loginPageSteps.validarErroLogin()
    })
})