const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 5000,
    baseUrl: "https://aloware.com/",
    timeout: 5000,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    video: false,
    watchForFileChanges: true,
    chromeWebSecurity: true,
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'test-report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    }

  },
});

