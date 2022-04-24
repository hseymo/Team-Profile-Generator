const inquirer = require("inquirer")
// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./util/generateHtml");
const generateHtml = require("./util/generateHtml");

const teamArray = [];
// finish -> HTML generated
// validate user input to proper format

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
                // console.log(`I chose ${answers.next}`);
                newEngineer();
                break;
            case 'Add an Intern':
                // console.log(`I chose ${answers.next}`);
                newIntern();
                break;
            default: 
                // console.log(`Thanks for building!`)
                console.log(teamArray);
                console.log(teamArray[0].constructor.name.toLowerCase());
                // GENERATE HTML PART TBD
                // forEach(member in teamArray) {
                //     let memberrole = member.constructor.name.toLowerCase();

                // }
                // generateTeam(teamArray);
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
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's employee ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email address?"
        },
        {
            type: "input",
            name: "office",
            message: "What is the manager's office number?"
        }
    ]).then(ans => {
        const manager = new Manager(ans.name, ans.id, ans.email, ans.office);
        // console.log(manager);
        teamArray.push(manager);
        // console.log(teamArray);
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
        // console.log(manager);
        teamArray.push(engineer);
        // console.log(teamArray);
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
        // console.log(manager);
        teamArray.push(intern);
        // console.log(teamArray);
        menu();
    })
}