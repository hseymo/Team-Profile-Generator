const inquirer = require("inquirer");
// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const team = require("./util/generateHtml");
const fs = require('fs');

const teamArray = [];

function start () {
    console.log('Welcome! Please tell us about your team.')
    newManager();
}

start()

function menu() {
    inquirer.prompt([
        {
            type: "list",
            name: "next",
            message: "What do you want to do next?",
            choices: ['Add an Engingeer', 'Add an Intern', 'Finish']
        }
    ]).then(answers => {
        switch (answers.next) {
            case 'Add an Engingeer': 
                newEngineer();
                break;
            case 'Add an Intern':
                newIntern();
                break;
            default: 
                writeHtmlFile();
                break;
        }
    })
}

function newManager() {
    console.log('Please provide some information for the manger.')
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the team manager's name?",
            validate: (answer) => {
                if ( answer !== ''){
                    return true;
                }
                return 'Please return something/ at least a letter'
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?",
            validate: (answer) => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if ( pass){
                    return true;
                }
                return 'Please enter an email without spaces?'
            }
        },
        {
            type: "input",
            name: "office",
            message: "What is the manager's office number?"
        }
    ]).then(ans => {
        const manager = new Manager(ans.name, ans.id, ans.email, ans.office);
        teamArray.push(manager);
        menu();
    })
}

function newEngineer() {
    console.log('Please provide some information for this engineer.')
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email address?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github?"
        }
    ]).then(ans => {
        const engineer = new Engineer(ans.name, ans.id, ans.email, ans.github);
        teamArray.push(engineer);
        menu();
    })
}

function newIntern() {
    console.log('Please provide some information for this intern.')
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email address?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?"
        }
    ]).then(ans => {
        const intern = new Intern(ans.name, ans.id, ans.email, ans.school);
        teamArray.push(intern);
        menu();
    })
}

function writeHtmlFile() {
    console.log(teamArray);
    team(teamArray);
    fs.writeFile('index.html', team(teamArray), (err) => 
        err ? console.log(err) : console.log('Success'))
}