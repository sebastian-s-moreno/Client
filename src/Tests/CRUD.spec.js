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
    
    // Click input[name="Input.Name"]
    await page.click('input[name="Input.Name"]');
    // Fill input[name="Input.Name"]
    await page.fill('input[name="Input.Name"]', 'Edit-test');
    // Click input[name="Input.Latitude"]
    await page.click('input[name="Input.Latitude"]');
    // Fill input[name="Input.Latitude"]
    await page.fill('input[name="Input.Latitude"]', '1');
    // Click input[name="Input.Longitude"]
    await page.click('input[name="Input.Longitude"]');
    // Fill input[name="Input.Longitude"]
    await page.fill('input[name="Input.Longitude"]', '2');
    // Click text=Submit
    await page.click('text=Submit');

    var element = page.locator('.loc-table-row').nth(-1);
    await expect(element.locator('td').nth(0)).toContainText('Edit-test');
    await expect(element.locator('td').nth(1)).toContainText('1');
    await expect(element.locator('td').nth(2)).toContainText('2');


    await page.locator('button.edit').nth(-1).click();
    // Click text=Edit location: Name: Latitude: Longitude: Submit >> input[name="Input.Name"]
    await page.click('text=Edit location: Name: Latitude: Longitude: Submit >> input[name="Input.Name"]');
    // Fill text=Edit location: Name: Latitude: Longitude: Submit >> input[name="Input.Name"]
    await page.fill('text=Edit location: Name: Latitude: Longitude: Submit >> input[name="Input.Name"]', 'Edit-test-edited');
    // Click text=Edit location: Name: Latitude: Longitude: Submit >> input[name="Input.Latitude"]
    await page.click('text=Edit location: Name: Latitude: Longitude: Submit >> input[name="Input.Latitude"]');
    // Fill text=Edit location: Name: Latitude: Longitude: Submit >> input[name="Input.Latitude"]
    await page.fill('text=Edit location: Name: Latitude: Longitude: Submit >> input[name="Input.Latitude"]', '12');
    // Click text=Edit location: Name: Latitude: Longitude: Submit >> input[name="Input.Longitude"]
    await page.click('text=Edit location: Name: Latitude: Longitude: Submit >> input[name="Input.Longitude"]');
    // Fill text=Edit location: Name: Latitude: Longitude: Submit >> input[name="Input.Longitude"]
    await page.fill('text=Edit location: Name: Latitude: Longitude: Submit >> input[name="Input.Longitude"]', '21');
    
    await page.locator('#editButton').click();

    await expect(element.locator('td').nth(0)).toContainText('Edit-test-edited');
    await expect(element.locator('td').nth(1)).toContainText('12');
    await expect(element.locator('td').nth(2)).toContainText('21');
    
    page.on('dialog', dialog => dialog.accept());
    await page.locator('button.delete').nth(-1).click();

  });

