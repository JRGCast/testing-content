import { expect, test } from '@playwright/test';

// See algo the playwright configuration file
// TODO: verify playwright annotations, specially test.fixme and test.slow

// similar to jest, you can focus on the test using test.only, skip using test.skip.

// you can use annotations on test using @theAnnotation, and then use the -grep flag to filter the tests:
// $ npx playwright test [...] --grep @smoke/@regression/@slow
// and you can filter out with --grep-invert, so it will play every tests that doesn't match the annotation

// you can group test using test.describe:

test.describe('Smoke tests', async () => {
  test('my first test @smoke', async ({ page }) => {
    await page.goto('https://playwright.dev');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
  })
  test('example screenshot test', async ({ page }, testInfo) => {
    await page.goto('https://playwright.dev');
    console.log(testInfo.workerIndex);
    testInfo.snapshotDir = __dirname + '/screenshots/' + testInfo.title;
    await expect(page).toHaveScreenshot('playwright-course/tests/firstTest.spec.ts-snapshots/Smoke-tests-example-screenshot-test-1-Chrome-linux.png');
  });
})

test.describe('Regression tests', async () => {
  test.skip('clicking tests sintaxes @regression', async ({ page }) => {
    await page.goto('https://playwright.dev');
    // these are the same:
    // await page.locator('text=Get started').click();
    // await page.click('text=Get started');
    const getStartedButton = page.locator('text=Get started');
    await getStartedButton.click();
    const h1 = page.locator('text=Getting started');
    await expect(h1).toHaveText('Getting started');
    await page.pause()
  })
})


test.describe('Slow tests', async () => {
  // you can use the test.skip to skip the testing in specific browsers:
  test.skip('skiping firefox browser testing @slow', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox');
    await page.goto('https://playwright.dev');
    const getStartedButton = page.locator('text=Get started');
    await getStartedButton.click();
  })
})
