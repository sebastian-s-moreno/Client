const { test, expect } =  require('@playwright/test')
const { chromium } =  require('playwright')

test('form-valid-data', async ({ }) => {
  const browser = await chromium.launch({ headless: false, slowMo: 100 }); 
  const page = await browser.newPage();
  // Go to https://localhost:7276/
  await page.goto('https://localhost:7276/');

  // Click input[name="Input.Name"]
  await page.click('input[name="Input.Name"]');
  // Fill input[name="Input.Name"]
  await page.fill('input[name="Input.Name"]', 'Oslo');
  // Click input[name="Input.Latitude"]
  await page.click('input[name="Input.Latitude"]');
  // Fill input[name="Input.Latitude"]
  await page.fill('input[name="Input.Latitude"]', '60');
  // Click input[name="Input.Longitude"]
  await page.click('input[name="Input.Longitude"]');
  // Fill input[name="Input.Longitude"]
  await page.fill('input[name="Input.Longitude"]', '11');
  // Click text=Submit
  await page.click('text=Submit');
  await expect(page).toHaveURL('https://localhost:7276/Locations');
  var element = page.locator('.loc-table-row').nth(-1);
  await expect(element).toContainText('Oslo');
  await expect(element).toContainText('60');
  await expect(element).toContainText('11');


});

test('form-invalid-data', async ({ }) => {
    const browser = await chromium.launch({ headless: false, slowMo: 100 }); 
    const page = await browser.newPage();
    // Go to https://localhost:7276/
    await page.goto('https://localhost:7276/');
  
    // Click input[name="Input.Name"]
    await page.click('input[name="Input.Name"]');
    // Fill input[name="Input.Name"]
    await page.fill('input[name="Input.Name"]', 'Trondheim');
    // Click input[name="Input.Latitude"]
    await page.click('input[name="Input.Latitude"]');
    // Fill input[name="Input.Latitude"]
    await page.fill('input[name="Input.Latitude"]', '100');
    // Click input[name="Input.Longitude"]
    await page.click('input[name="Input.Longitude"]');
    // Fill input[name="Input.Longitude"]
    await page.fill('input[name="Input.Longitude"]', '6');
    // Click text=Submit
    await page.click('text=Submit');
    var element = page.locator('.field-validation-error').nth(0);
    await expect(element).toContainText('The field Latitude must be between -90 and 90.');
  
  });

  test('form-empty-fields', async ({ }) => {
    const browser = await chromium.launch({ headless: false, slowMo: 100 }); 
    const page = await browser.newPage();
    // Go to https://localhost:7276/
    await page.goto('https://localhost:7276/');
  
    // Click input[name="Input.Latitude"]
    await page.click('input[name="Input.Latitude"]');
    // Fill input[name="Input.Latitude"]
    await page.fill('input[name="Input.Latitude"]', '50');
    // Click input[name="Input.Longitude"]
    await page.click('input[name="Input.Longitude"]');
    // Fill input[name="Input.Longitude"]
    await page.fill('input[name="Input.Longitude"]', '6');
    // Click text=Submit
    await page.click('text=Submit');
    var element = page.locator('.field-validation-error').nth(0);
    await expect(element).toContainText('The Name field is required.');
  
  });