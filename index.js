//Include packages
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

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

function makeHTML(data) {
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UFT-8">
        <title>My Team</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            My Team
        </header>
        <div class="boxes">
            <p>${data.nameManager}</p>
            <p>Manager</p>
            <p>ID: ${data.IDManager}</p>
            <p>email: ${data.emailManager}</p>
            <p>Office number: ${data.officeNumber}<p>
        </div>
        <div class="boxes">
            <p>${data.nameEngineer}</p>
            <p>Engineer</p>
            <p>ID: ${data.IDEngineer}</p>
            <p>email: ${data.emailEngineer}</p>
            <p>Github username: ${data.gitName}<p>
        </div>
        <div class="boxes">
            <p>${data.nameIntern}</p>
            <p>Intern</p>
            <p>ID: ${data.IDIntern}</p>
            <p>email: ${data.emailIntern}</p>
            <p>School: ${data.school}<p>
        </div>
    </body>
</html>`
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, makeHTML(data), (err) => {
        err ? console.error(err) : console.log("You can view your team by opening ./dist/index.html");
    });
}

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('./dist/index.html', answers);
    });
}

init();