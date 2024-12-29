import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://nginx-hello.local', // Base URL of your application
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Spec file location pattern
    supportFile: 'cypress/support/e2e.ts', // Path to the support file
    setupNodeEvents(on, config) {
      // Example Node event listeners
      on('task', {
        log(message: string) {
          console.log(message);
          return null;
        },
      });
      return config;
    },
  },
  env: {
    apiUrl: 'https://api.example.com', // Example environment variable
  },
  viewportWidth: 1280, // Default viewport width
  viewportHeight: 720, // Default viewport height
  retries: {
    runMode: 2, // Retry failed tests in `cypress run`
    openMode: 1, // Retry failed tests in `cypress open`
  },
  video: true, // Enable video recording
  screenshotOnRunFailure: true, // Take screenshots on failure
});

