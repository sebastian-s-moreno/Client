const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    // Open new page
    const page = await context.newPage();
    // Go to https://localhost:7276/
    await page.goto('https://localhost:7276/');
    // ---------------------
    await context.close();
    await browser.close();
})();
