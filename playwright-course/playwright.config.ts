import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  retries: 1,
  timeout: 20000, // default is 30 secs,
  // testDir: 'playwright-course/tests', // default is 'tests'

  use: { // you can specify a default setting to be used in every test, there are a HUGE LOAD of them, most common are:
    // browser: 'chromium', // default is chromium
    headless: true, // default is true
    video: 'on-first-retry', // default is 'off', we have on-first-retry and retain-on-failure
    viewport: { height: 1920, width: 1080 }, // default is {height: 800, width: 600}
    screenshot: 'only-on-failure', // default is 'off'
    // slowMo: 100, // default is 0, slow down the browser by 100ms
    // devtools: true, // default is false, open devtools in every page
    // args: [], // default is [], you can pass additional arguments to the browser
    // executablePath: '', // default is '', you can specify the path to the browser executable
    // userDataDir: '', // default is '', you can specify the path to the userDataDir
    // proxy: '', // default is '', you can specify the proxy to be used in every page
    // proxyBypassRules: [], // default is [], you can specify the proxyBypassRules to be used in every page
    // ignoreDefaultArgs: [], // default is [], you can specify the ignoreDefaultArgs to be used in every page
    // dumpio: false, // default is false, you can specify if you want to dump the io in every page
    // browserContext: '', // default is '', you can specify the browserContext to be used in every page
    // userAgent: '', // default is '', you can specify the userAgent to be used in every page  
  },
  projects: [
    {
      name: 'Chrome',
      use: { browserName: 'chromium' }
    },
    // {
    //   name: 'Firefox',
    //   use: { browserName: 'firefox' }
    // },
    // {
    //   name: 'Webkit',
    //   use: { browserName: 'webkit' }
    // }
  ]
}

export default config;