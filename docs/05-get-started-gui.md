# Get started client
In this session, you will instal Node.js,playwright and code editor.

### Instal Node.js
- Install Node.js by going to Nodejs.org in your web browser and install the LTS version. 
- Click "next" on the installation setup (it is a quick installation)

### Instal Visual Studio Code
- Go to code.visualstudio.com you can click the installation for the Visual studio Code
- Click "next" on the installation setup (it is a quick installation)
- Visual Studio works with folders as projects, so create a new folder on your desktop for this project, Exsample: "Playwright-WeatherClient"
- Once you have your folder, you can open it up from VS Code.File > Open Folder > Click Select Folder

### Instal Playwright 
- Start a console in VS Code: Terminal > New Terminal. Write: "npm i -D playwright" 

##### What you can do if you get error-message when installing Playwright:
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