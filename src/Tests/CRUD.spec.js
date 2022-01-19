const { test, expect } =  require('@playwright/test')
const { chromium } =  require('playwright')

test('delete-location', async ({ }) => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 }); 
  const page = await browser.newPage();
  
  await page.goto('https://localhost:7276/');

  await page.click('input[name="Input.Name"]');
  await page.fill('input[name="Input.Name"]', 'Kristiansund');
  await page.click('input[name="Input.Latitude"]');
  await page.fill('input[name="Input.Latitude"]', '60');
  await page.click('input[name="Input.Longitude"]');
  await page.fill('input[name="Input.Longitude"]', '11');
  await page.click('text=Submit');
  await expect(page).toHaveURL('https://localhost:7276/Locations');

  page.on('dialog', async dialog => {
    await dialog.accept();
  });
  await page.click('tr:has(td:text("Kristiansund")) button.delete')
  await expect(page).toHaveURL('https://localhost:7276/Locations');

  await expect(page.locator('tr:has(td:text("Kristiansund"))')).toHaveCount(0) 

});


test('edit-location', async ({ }) => {
    const browser = await chromium.launch({ headless: false, slowMo: 500 }); 
    const page = await browser.newPage();
    // Go to https://localhost:7276/
    await page.goto('https://localhost:7276/');


  
  });

