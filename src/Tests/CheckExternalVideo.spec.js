const { test, expect } = require('@playwright/test');

test('Youtube ', async ({ page }) => {
  // Go to https://localhost:7276/
  await page.goto('https://localhost:7276/');
  // Click text=Forecast 2050
  await page.click('text=Forecast 2050');
  // Check the URL
  await expect(page).toHaveURL('https://localhost:7276/Forecast');
  // Wait for the page to load
  await page.waitForLoadState();
  // Create a variable that contains the iframe
  const iframe = await page.frame({url: 'https://www.youtube.com/embed/3FOyzK33L0Y'});
  // Click [aria-label="Play"]
  await iframe.click('[aria-label="Play"]');
  // Check the title of the video
  await expect(iframe.locator('.ytp-title-link')).toContainText('Værvarsel for vinteren 2050');
});