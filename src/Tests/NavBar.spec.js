
const { test, expect } =  require('@playwright/test')
test('navbar', async ({ page }) => {
  // Go to https://localhost:7276/
  await page.goto('https://localhost:7276/');


  // Click text=Recommendations
  await page.click('text=Recommendations');
  await expect(page).toHaveURL('https://localhost:7276/Recommendations');
  await expect(page.locator('.rec-header')).toHaveText('Get recommendations');


  // Click text=Forecast 2050
  await page.click('text=Forecast 2050');
  await expect(page).toHaveURL('https://localhost:7276/Forecast');
  await expect(page.locator('.forecast-header')).toHaveText('Watch the forecast for 2050');

  // Click text=Locations
  await page.click('text=Locations');
  await expect(page).toHaveURL('https://localhost:7276/');
  await expect(page.locator('.loc-header')).toHaveText('Locations');
});