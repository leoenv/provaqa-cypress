const loginPageLocators = {

  inputs: {

    login: () => cy.get(':nth-child(1) > .input > input'),
    password: () => cy.get(':nth-child(2) > .input > input'),
  },

  buttons: {

    signIn: () => cy.get('.btn'),
  },

  texts: {

    credenciaisInvalidas: () => cy.get('font > label'),
  }
}

export default loginPageLocators