
#Playwright Tips and tricks

#### 1. Generate scripts
1. Create a file, remember to write .js so it is a JavaScript file in Playwright (it will choose TS (typescript) by default elsewise) 
2. Remember to include “.spec” in test script file name like:  FirstTest.spec.js  
3. When running the browser; write: npx playwright codegen “web browser you want to test” 
4. Remember to choose Target “JavaScript” in the Playwright Inspector  
5. Click on the steps you want to test 
6. Copy the code and insert it in VS Code 
7. Run the test by writing: node .\Testingweatherclient.js 

 
#### 2. Headless and slowmo
When you run your testscrip you can wonder why nothing happened. The truth is that something happened, however, Playwright runs by default in headless-mode. 
So, to see what Playwright does, you can write: 

const browser = await chromium.launch({ 

  headless: false, slowMo: 100 --> (the value is in milli sec.) write this in your testscript 

  }); 

Here you can also add “slowmo”-option which helps you slow down the execution of the test script so that you are able to follow along.  


#### 3. Taking screenshot

You can take up to ten screenshots per browser check. This is really handy when debugging a failure situation or just in general to get a comfy feeling everything is OK. 

Add a screenshot anywhere by using the following syntax in your script: await page.screenshot({path:'screenshot.png'}); 


Screenshots need to stick to the following specs: 

Either .png, jpeg or jpg suffix. 

Allowed characters are a-z A-Z 0-9 - _ @ So no whitespaces in the filename. 

 
