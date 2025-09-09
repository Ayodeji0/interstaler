const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://the-internet.herokuapp.com",
    setupNodeEvents(on, config) {
      // turn off unnecessary network logs
      on('task', {
        log(message) {
          return null
        }
      })
    },
    chromeWebSecurity: false
  },
  reporterOptions: {
    // keeps reports clean
    quiet: true
  }
})


