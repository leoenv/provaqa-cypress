const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 5000,
  e2e: {
    specPattern: 'cypress/e2e/tests',
    baseUrl: 'http://provaqa.prc.rpe.tech:9080/desafioqa/'
  },
  reporter: 'cypress-qase-reporter',
  reporterOptions: {
    mode: "test",
    screenshotFolder: 'screenshots',
    videoFolder: 'videos',
    projectCode: 'TEST',
    logging: true,
    basePath: 'https://api.qase.io/v1',
    sendScreenshot: true,
    runComplete: true,
    rootSuiteTitle: 'Cypress Web'
  }
});