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
    // Click text=Recommendations
    await page.click('text=Recommendations');
    await expect(page).toHaveURL('https://localhost:7276/Recommendations');
    // Fill text=Sailing >> input[name="activity"]
    await page.check('text=Sailing');

    // Click button:has-text("Get recommendation")
    await page.click('button:has-text("Get recommendation")');
    var element = page.locator('.rec-error-msg');
    await expect(element).toContainText(/.*/);
  
  });

  test('details-button', async ({ }) => {
    const browser = await chromium.launch({ headless: false, slowMo: 500 }); 
    const page = await browser.newPage();
    // Go to https://localhost:7276/
    await page.goto('https://localhost:7276/');

    await page.click('input[name="Input.Name"]');
    // Fill input[name="Input.Name"]
    await page.fill('input[name="Input.Name"]', 'Bergen');
    // Click text=Latitude: Longitude:
    await page.click('text=Latitude: Longitude:');
    // Click input[name="Input.Latitude"]
    await page.click('input[name="Input.Latitude"]');
    // Fill input[name="Input.Latitude"]
    await page.fill('input[name="Input.Latitude"]', '11');
    // Click input[name="Input.Longitude"]
    await page.click('input[name="Input.Longitude"]');
    // Fill input[name="Input.Longitude"]
    await page.fill('input[name="Input.Longitude"]', '65');
    // Click text=Submit
    await page.click('text=Submit');
    await expect(page).toHaveURL('https://localhost:7276/Locations');
    
    // Click text=Details
    await page.locator('button.details').nth(-1).click();
    var element = page.locator('.modal-title-details');
    await expect(element).toContainText("Bergen");
    
    var element = page.locator('#air-temperature');
    await expect(element).toContainText("℃");
    
    await page.check('input[role="switch"]');
  
    var element = page.locator('#air-temperature');
    await expect(element).toContainText("℉");

    var element = page.locator('#details-time');
    var today = new Date();
    await expect(element).toContainText(today.getDate().toString());
    await expect(element).toContainText(today.getMonth().toString());
    await expect(element).toContainText(today.getFullYear().toString());

  });
