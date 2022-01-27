const { test, expect } =  require('@playwright/test')
const { chromium } =  require('playwright')

test('external-link', async ({ }) => {
    const browser = await chromium.launch({ headless: false, slowMo: 500 }); 
    const page = await browser.newPage();
    // Go to https://localhost:7276/
    await page.goto('https://localhost:7276/');
     
    // Click text=www.latlong.net
    await page.click('text=www.latlong.net');
    await expect(page).toHaveURL('https://www.latlong.net/');
    

  
  });
