# **Team-Profile-Generator**

![Badge](https://img.shields.io/badge/license-MIT-blue)

## **Table of Contents**
---
  - [License](#license)
  - [Installation](#installation)
  - [Packages](#packages)
  - [Description](#description)
  - [Usage](#usage)
  - [Screenshots](#screenshots)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions?](#questions)

<br>

## **License** 
---
[MIT License](./LICENSE) <br>

Copyright (c) 2022 Haley Seymour

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 <br>

<br>

## **Installation** 
---
To install this project: 
1. Start by forking this repository on Github. 
2. Clone this project to your machine by using the "git clone + URL" command. 
3. Open the project with your favorite text editor, like VS Code (in your terminal, first type "cd foldername" then "code ."). 
4. Install Node.js from their website, if you have not already. Here are some additional [instructions](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs).
5. This project includes a package.json file that specifies dependencies for this project, so be sure to run "npm install". This will install the packages specified in the next section. 

<br>

## **Packages** 
---
General Technologies: 
- HTML
- CSS
- Javascript
- Node.js

NPM Packages
- inquirer 
- fs 
- Jest for development

<br>

## **Description**
---
The motivation for this project is to create a webpage using Node.js to easily organize employee information for your work team. It aims to assist managers in keeping track of the engineers and interns under them, as well as contact information like email, content porfolios like Github, and school association for interns. The generated page is easy to read and contains links to the necessary information. It solves the need to keep team information organized and easily accessible. Once created, the manager may share the page with the team so all parties have contact information for their colleagues. <br><br>

This project is not deployed. <br><br>

## **Usage** 
---
This program is a command-line application with Node.js. To use this project:
1. Open the "index.js" file in your integrated terminal. 
2. Run the command "node index.js" and a series of prompts will begin. 
   - First you will be prompted for the manager's information, and then you can elect to add Engingeers and Interns. 
   - Once you have entered a team member, you will be redirected back to the menu, to repeat adding team members (no max) until your team is complete. There are validation checks to ensure content is input, and Regex checks to ensure email formatting is valid. 
   - Once you are finished, select "Finish" from the menu, and an html file titled 'index.html' will be generated.
3. Open this html file in your browser to view the final product. There are live links to open email addresses via 'mailto', and to open github profiles. 

<br><br>
Please check out this [video](https://drive.google.com/file/d/1kdn9Pg2lKCgrr9-BRC3Lv6JM6jX4yP3J/view) to view a demonstation of this program.

### **Screenshots**
--- 
Generated Webpage <br>
![webpageexample](./assets/screenshots/ExampleWebpage.png)
<br><br>
GIF of Commandline Prompts<br>
![promptsGIF](./assets/screenshots/gif.gif)
<br><br>
Completed Prompts with Validation Message <br>
![prompts](./assets/screenshots/PromptswithValidationExample.png)
<br><br>
Prompt Menu <br>
![promptmenu](./assets/screenshots/PromptMenu.png)
<br><br>
Testing Suite Passing Results <br>
![testingsuite](./assets/screenshots/Tests.png)
<br>

<br>

## **Contributing** 
---
This project was completed by myself, Haley Seymour, with starter code provied from the University of Washington Web Development Bootcamp. If you would like to contribute, please do and let me know if you have any questions.

<br>

## **Tests** 
---
Testing utilizes 'Jest' and tests are included in a folder titled "test". Open the library files in your integrated terminal and run the command "npm test" (after installing via "npm i" or "npm install") to run 17 tests on 4 test suites. 

<br>

## **Questions?** 
---
Please contact me on Github at [hseymo](https://github.com/hseymo) or by [email](mailto:haleycseymour@comcast.net).
