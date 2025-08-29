// Configuration for Cypress 9.7.0 (compatible with Firefox)
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'firefox') {
          // Cypress 9.x compatible Firefox configuration
          launchOptions.args = launchOptions.args || [];
          launchOptions.args.push('--width=1280');
          launchOptions.args.push('--height=720');

          launchOptions.preferences = launchOptions.preferences || {};
          launchOptions.preferences['media.navigator.permission.disabled'] = true;
          launchOptions.preferences['browser.sessionstore.resume_from_crash'] = false;
          launchOptions.preferences['browser.startup.homepage'] = 'about:blank';
          launchOptions.preferences['browser.startup.page'] = 0;
          launchOptions.preferences['toolkit.startup.max_resumed_crashes'] = -1;
          launchOptions.preferences['datareporting.healthreport.uploadEnabled'] = false;
          launchOptions.preferences['datareporting.policy.dataSubmissionEnabled'] = false;
        }
        return launchOptions;
      });
    },
    baseUrl: 'http://localhost:4200',
    modifyObstructiveCode: false,
    video: false,
    screenshotOnRunFailure: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    pageLoadTimeout: 30000,
    chromeWebSecurity: false,
    taskTimeout: 60000,
    retries: {
      runMode: 2,
      openMode: 0
    }
  }
};
