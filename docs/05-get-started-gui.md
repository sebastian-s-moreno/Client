# Get started client


### Table of content
1. What is playwright
2. Installation
3. Tips and tricks



### 1. What is playwright?
Playwright is a Node.js library made for browser automation. It is free, open-source and it is backed up by Microsoft.  
Playwright supports 3 browser engines that together cover all the popular browsers like Google, Chrome, Microsoft Edge, Apple Safari, Opera, Mozilla Firefox,etc.  
It can be used with the most populare languages out there, like: Typescript & Javascript, C#, Java, or Python. It has some cool benefits, 
it can: automatically download the browser it needs, record videos of your test, intercept and modify network requests, 
emulate devices, location, locale, time zone, etc. And it has a code generator and debugger  

### 2. Installation
In this session, you will instal Node.js, playwright and code editor. 

#### 2.1 Instal Node.js
- Install Node.js by going to Nodejs.org in your web browser and install the LTS version. 
- Click "next" on the installation setup (it is a quick installation)

#### 2.2 Instal Visual Studio Code
- Go to code.visualstudio.com you can click the installation for the Visual studio Code
- Click "next" on the installation setup (it is a quick installation)
- Visual Studio works with folders as projects, so create a new folder on your desktop for this project, Exsample: "Playwright-WeatherClient"
- Once you have your folder, you can open it up from VS Code.File > Open Folder > Click Select Folder

#### 2.3 Instal Playwright 
- Start a console in VS Code: Terminal > New Terminal. Write: "npm i -D playwright" 

##### 2.3.1 Instal Playwright Test Runner
- npm i -D @playwright/test    

##### 2.3.2 Error-message when installing Playwright?:
- Run the VS Code as administrator. This you can do by writing Visual Studio Code in your search option on you computer and rightclick and choose "run as administrator"
- If you still get error-message, you can check that the node.js has the right path: 
1. Open the Start Menu.
2. Right-click on Computer and click Properties.
3. Click Advanced system settings.
4. Make sure you're on the Advanced tab
5. Click Environment Variables
6. Under the “System Variables” section (the lower half), find the row with “Path” in the first column, and click edit
7. The “Edit environment variable” UI will appear. Here, you can click “New” and type in the new path you want to add. 
8. Dismiss all of the dialogs by choosing “OK”. Your changes are saved!
9. You will probably need to restart apps for them to pick up the change. Restarting the machine would ensure all apps are run with the PATH change.

 