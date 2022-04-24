const inquirer = require("inquirer")
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let thisEmployee = {};

// menu of options to add engingeer or intern or finish
// finish -> HTML generated
// validate user input to proper format

// console.log(Employee)
// console.log(Engineer)
// console.log(Manager)
// console.log(Intern)

const start = async () => {
    const manager = await askManager();
}

const askEmployeeQuestions = async() => {
    await inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the team manager's name?"
        },
        {
            type: "input",
            name: "managerID",
            message: "What is the manager's employee ID?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?"
        }
    ])
    .then (ans => {
        // console.log(ans)
        thisEmployee = ans;
        return thisEmployee;
    })
}

const askManager = async() => {
    await askEmployeeQuestions();
    // console.log(thisEmployee)
    inquirer.prompt([
         {
            type: "input",
            name: "office",
            message: "What is the manager's office number?"
        }
    ]).then (ans => {
        // console.log(ans)
        thisEmployee.officeNumber = ans.office;
        console.log(thisEmployee);
        return thisEmployee;
    })
}

start();


// WORKING VERSION MANAGER OTHER

// const newManager = async () => {
//     const ans = await inquirer.prompt([
//         {
//             type: "input",
//             name: "name",
//             message: "What is the team manager's name?"
//         },
//         {
//             type: "input",
//             name: "id",
//             message: "What is the manager's employee ID?"
//         },
//         {
//             type: "input",
//             name: "email",
//             message: "What is the manager's email address?"
//         },
//         {
//             type: "input",
//             name: "office",
//             message: "What is the manager's office number?"
//         }
//     ])
//     const manager = new Manager(ans.name, ans.id, ans.email, ans.office);
//     // console.log(manager);
//     team.push(manager);
//     console.log(team);
//     menu();
// }