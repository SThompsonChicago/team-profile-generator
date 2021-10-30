//Include packages
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');


const questions = [
    {
        message: "What is the team manager's name?",
        name: "nameManager",
    },
    {
        message: "What is the team manager's ID?",
        name: "IDManager",
    },
    {
        message: "What is the team manager's email?",
        name: "emailManager",
    },
    {
        message: "What is the team manager's office number?",
        name: "officeNumber",
    },
    {
        message: "What is your engineer's name?",
        name: "nameEngineer",
    },
    {
        message: "What is your engineer's ID?",
        name: "IDEngineer",
    },
    {
        message: "What is your engineer's email?",
        name: "emailEngineer",
    },
    {
        message: "What is your engineer's github username?",
        name: "gitName",
    },
    {
        message: "What is your intern's name?",
        name: "nameIntern",
    },
    {
        message: "What is your intern's ID?",
        name: "IDIntern",
    },
    {
        message: "What is your intern's email?",
        name: "emailIntern",
    },
    {
        message: "What is your intern's school?",
        name: "school",
    }
];



function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(`The manager's name is${answers.nameManager}`);
    })
}

init();