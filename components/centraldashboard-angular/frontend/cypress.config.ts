import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.name === 'firefox') {
          launchOptions.args.push('--width=1280');
          launchOptions.args.push('--height=720');
          launchOptions.preferences = launchOptions.preferences || {};
          launchOptions.preferences['media.navigator.permission.disabled'] = true;
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
    },
  },
});
