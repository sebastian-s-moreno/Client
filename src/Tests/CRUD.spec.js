const { test, expect } =  require('@playwright/test')
const { chromium } =  require('playwright')

test('delete-location', async ({ }) => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 }); 
  const page = await browser.newPage();
  // Go to https://localhost:7276/
  await page.goto('https://localhost:7276/');
  await page.locator('button.delete').nth(0).click();
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
    });
    await expect(page).toHaveURL('https://localhost:7276/Locations');

    // VERIFY THAT THE CORRECT ROW IS DELETED


});

test('edit-location', async ({ }) => {
    const browser = await chromium.launch({ headless: false, slowMo: 500 }); 
    const page = await browser.newPage();
    // Go to https://localhost:7276/
    await page.goto('https://localhost:7276/');


  
  });

