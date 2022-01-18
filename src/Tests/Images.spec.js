const { test, expect } =  require('@playwright/test')
const { chromium } =  require('playwright')

test('images', async ({ }) => {
    const browser = await chromium.launch({ headless: false, slowMo: 500 }); 
    const page = await browser.newPage();
    // Go to https://localhost:7276/
    await page.goto('https://localhost:7276/');
    await page.click('text=Recommendations');
    await expect(page).toHaveURL('https://localhost:7276/Recommendations');
    expect(await page.screenshot()).toMatchSnapshot('landing.png');

  
  });
