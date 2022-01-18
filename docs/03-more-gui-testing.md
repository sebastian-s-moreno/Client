# Gui testing - continuation
In this session, you will use Playwright to perform end-to-end GUI testing. You can find the documentation for Playwright here: https://playwright.dev/docs/intro. Use this to find different ways to solve the following tasks. 

Try your best to solve the tasks by the help of Playwright Codegenerator and reading the docs. When you need help, take a look at the suggested solutions in XXXXXX. 

## Navigation Bar
1. Test the different pages in the navigation bar, and verify that the correct URL is loaded. At the same time, verify that the heading in each page is correct.

## Forms
1. Fill out form with valid data and click submit. Verify that an entry has been created and is shown with the correct data in the table. 

2. Fill out form with invalid data and click submit.
Latitudes range from -90 to 90, and longitudes range from -180 to 80. 
Verify that you can not submit.

3. Test what happens if you leave some of the fields empty. Does the webpage behave as expected? 


## Buttons 
Exercises 1 and 2 have some prerequisites. Namely that the Location table is already filled with data or that it is empty. Ensuring this increases the complexity of the tests. If you have time, you can try to include this in your tests, if not, solve the exercises and assume that the prerequisites are met.

1. Test the Recommendations-page by choosing an activity by radio buttons, and push Get Recommendations. 
2. Start with an empty Location table and test the Get Recommendation functionality. Verify that an error message is shown. 

3. Test the functionality of the Details button, and verify that the displayed text is correct. Some examples of tests to perform: 
- The header should have the correct location name
- You can correctly toggle back and forth between Celcius and Fahrenheit. 
- The date should be today's date
- The different fields all have a value and a unit. 

## CRUD-Operations
When you tested the form, you verified that the two CRUD-operations, Create and Read, worked as expected. Now, you will test the two remaining operations: Update and Delete. 
1. Verify that when you click the delete button for an entry in the table, the element is deleted. 
2. Verify that you can update an entry by clicking the Edit-button. Try both with valid and invalid data. The updated entry should immidiately be seen in the table. 

## External links
1. Verify that when you click on external links (ex: www.latlong.net in the Locations page), you are redirected to the expected page. 

## Images 
1. One way to perform testing of images is to do a visual comparison (https://playwright.dev/docs/test-snapshots). Do this for the Recommendations page to verify that all the images is loaded correctly. 
