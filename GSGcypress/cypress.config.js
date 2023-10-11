const { defineConfig } = require("cypress");

const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {

    baseUrl: "https://opensource-demo.orangehrmlive.com/web/",
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    pageLoadTimeout: 6000
    
  },
  env: {
    allureReuseAfterSpec: true,
    download_dir: "./cypress/downloads",
    snapshotOnly: true,
  }, 
     allureResulsPath: "allure-results",
  videosFolder: "allure-results/",
  screenshotOnRunFailure: true,

});
