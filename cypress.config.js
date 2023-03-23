const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://zillow.com', // Set baseUrl for ease of use in future tests
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
