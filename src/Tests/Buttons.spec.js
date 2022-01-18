const { test, expect } =  require('@playwright/test')
const { chromium } =  require('playwright')

test('get-recommendations', async ({ }) => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 }); 
  const page = await browser.newPage();
  // Go to https://localhost:7276/
  await page.goto('https://localhost:7276/');

  // Click text=Recommendations
  await page.click('text=Recommendations');
  await expect(page).toHaveURL('https://localhost:7276/Recommendations');
  // Fill text=Sailing >> input[name="activity"]
  await page.check('text=Sailing');

  // Click button:has-text("Get recommendation")
  await page.click('button:has-text("Get recommendation")');
  var element = page.locator('.recommended-city');
  await expect(element).toContainText(/.*/);


});

test('get-recommendation-no-data', async ({ }) => {
    const browser = await chromium.launch({ headless: false, slowMo: 500 }); 
    const page = await browser.newPage();
    // Go to https://localhost:7276/
    await page.goto('https://localhost:7276/');

  
  });

  test('form-empty-fields', async ({ }) => {
    const browser = await chromium.launch({ headless: false, slowMo: 500 }); 
    const page = await browser.newPage();
    // Go to https://localhost:7276/
    await page.goto('https://localhost:7276/');

  });