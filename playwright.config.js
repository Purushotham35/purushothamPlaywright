// @ts-check
import { defineConfig, devices } from '@playwright/test';

require('dotenv').config()
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

//import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({

//reporter: "allure-playwright",
    
  timeout: 60000,
  expect:{
timeout:30000,

  },

  
  testDir: './tests',


  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail thebuild on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html'], ["dot"], ['json', { outputFile: 'results.json' }],["allure-playwright"]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: false,
    /* Base URL to use in actions like `await page.goto('/')`. */
     baseURL: 'https://opensource-demo.orangehrmlive.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    //trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
name:"setup",
use:{
...devices['Desktop Chrome'],
channel:'chrome'

},
testMatch:/.*\.setup\.js/,



    },



    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    
    // }  ,

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  //]

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
       //name: 'Microsoft Edge',
      // use: { ...devices['Desktop Edge'], channel: 'msedge' },
     // },
    {
     name: 'Google Chrome',
     use: { 
       ...devices['Desktop Chrome'], 
       channel: 'chrome',
       //storageState: ".auth/user.json"
     },
    //dependencies:['setup'],
     },

  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
  
});

