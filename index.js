const inquirer = require("inquirer")
// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const team = [];
// finish -> HTML generated
// validate user input to proper format

console.log('Welcome! PLease tell us about your team.')
newManager();

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
                console.log(team)
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
        team.push(manager);
        // console.log(team);
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
        team.push(engineer);
        // console.log(team);
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
        team.push(intern);
        // console.log(team);
        menu();
    })
}