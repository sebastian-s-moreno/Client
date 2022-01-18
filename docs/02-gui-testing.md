# Gui testing
In this session, you will use Playwright to perform end-to-end GUI testing. You can find the documentation for Playwright here: https://playwright.dev/docs/intro. Use this to find different ways to solve the following tasks. 

## Create your first Playwright script
Start by creating a folder in `/src/` of the front-end project called "Tests". As the name implies, this folder will contain everything related to tests for the front-end part of the application. Open the folder in the editor of your choice and install **Playwright** and **Playwright test runner** as explained in the installation document. 

```powershell
npm i -D playwright
npm i -D @playwright/test 
```

For our first test script we will verify that the Youtube-video in the Forecast 2050 page is available. 

Start by creating a new .js-file with a descriptive name, e.g. `CheckExternalVideo.spec.js`.

Now begins the task of writing a script that goes through the suited steps and verifications. For this test we created a starting point with the `npx playwright codegen "https://localhost:7276/"` command. After clicking on the Forecast 2050 page, we pressed the play button on the video. 
These actions gave the following code:

``` javascript
import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://localhost:7276/
  await page.goto('https://localhost:7276/');
  // Click text=Forecast 2050
  await page.click('text=Forecast 2050');
  await expect(page).toHaveURL('https://localhost:7276/Forecast');
  // Click [aria-label="Play"]
  await page.frame({
    url: 'https://www.youtube.com/embed/3FOyzK33L0Y'
  }).click('[aria-label="Play"]');
```

Replace the top line with
``` javascript
// import { test, expect } from '@playwright/test'; <-Replace this line
const { test, expect } = require('@playwright/test');
```
and paste the code into your script. Try to run the script with 
```bash
npx playwright test --headed
```

Notice that the script fails. The error message reads 
```
"TypeError: Cannot read properties of null (reading 'click')", meaning await page.frame({url: 'https://www.youtube.com/embed/3FOyzK33L0Y'}) return null. 
```
A quick view on the Forecast page with DevTools does however confirm that our page contains an iframe with src="https://www.youtube.com/embed/3FOyzK33L0Y", so the error message seems a bit strange. 

What has happened here is that Playwright is too quick when executing the script. The browser does not have time to load the element before Playwright tries to find it. To combat this issue, we ask Playwright to wait for the page to be fully loaded using the line: 
``` javascript
await page.waitForLoadState(); 
```
You may be tempted to set a hard wait of X seconds, but this could easily fail if the internet connection is bad, or you could end up waiting unnecessarily long.
 
This example shows that you cannot always trust the codegen-tool blindly. Some adjustments might be necessary. 

To finish the test script, we create a new variable that contains the iframe and add an extra expect-statement to verify that the title of the video is correct. We also gave the test function a more descriptive name. This leaves us with the following:

``` javascript
const { test, expect } = require('@playwright/test');

test('Check youtube video', async ({ page }) => {
  // Go to https://localhost:7276/
  await page.goto('https://localhost:7276/');
  // Click text=Forecast 2050
  await page.click('text=Forecast 2050');
  // Check the URL
  await expect(page).toHaveURL('https://localhost:7276/Forecast');
  // Wait for the page to load
  await page.waitForLoadState();
  // Create a variable that contains the iframe
  const iframe = await page.frame({url: 'https://www.youtube.com/embed/3FOyzK33L0Y'});
  // Click [aria-label="Play"]
  await iframe.click('[aria-label="Play"]');
  // Check the title of the video
  await expect(iframe.locator('.ytp-title-link')).toContainText('Værvarsel for vinteren 2050');
});
```
This script will verify

- That you can go the home page
- That the Forecast-tab is displayed on the home page and that you can click on it
- That the Forecast-page has the correct URL and is loaded
- That there is an iframe with a specific URL source
- That there is a clickable play button in the iframe
- That the name of the video in the iframe is what we expect


## Navigation Bar
1. Test the different pages in the navigation bar, and verify that the correct URL is loaded. At the same time, verify that the heading in each page is correct.

## Forms
1. Fill out form with valid data and click submit. Verify that an entry has been created and is shown with the correct data in the table. 

2. Fill out form with invalid data and click submit.
Latitudes range from -90 to 90, and longitudes range from -180 to 80. 
Verify that you can not submit.

3. Test what happens if you leave some of the fields empty. Does the webpage behave as expected? 


## Buttons 
1. Test the Recommendations-page by choosing an activity by radio buttons, and push Get Recommendations. 

2. Start with an empty Location table and test the Get Recommendation functionality. Verify that an error message is shown. 

3. Test the functionality of the Details button, and verify that the displayed text is correct. Some examples of tests to perform: 
- The header should have the correct location name
- The date should be today's date
- The different fields all have a value and a unit. 

## CRUD-Operations
When you tested the form, you verified that the two CRUD-operations, Create and Read, worked as expected. Now, you will test the two remaining operations: Update and Delete. 
1. Verify that when you click the delete button for an entry in the table, the element is deleted. 
2. Verify that you can update an entry by clicking the Edit-button. Try both with valid and invalid data. The updated entry should immidiately be seen in the table. 

## Toggle button 
1. Verify that when you go to the Details page, you can correctly toggle back and forth between Celcius and Fahrenheit. 

## External links
1. Verify that when you click on external links (ex: www.latlong.net in the Locations page), you are redirected to the expected page. 

## Images 
1. One way to perform testing of images is to do a visual comparison (https://playwright.dev/docs/test-snapshots). Do this for the Recommendations page to verify that all the images is loaded correctly. 
