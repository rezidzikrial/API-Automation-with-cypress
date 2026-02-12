const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://jsonplaceholder.typicode.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
     env: {
      apiKey: " "
    },
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 8000,
    requestTimeout: 8000,
  },
});
