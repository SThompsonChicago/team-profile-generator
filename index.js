//Include packages
const fs = require('fs');
const inquirer = require('inquirer');
//const Employee = require('employee');
//const Manager = require('manager');

const questions = [
    {
        message: "What is the team manager's name?",
        name: "name",
    },
    {
        message: "What is the team manager's ID?",
        name: "ID",
    },
    {
        message: "What is the team manager's email?",
        name: "email",
    },
    {
        message: "What is the team manager's office number?",
        name: "officeNumber",
    },
];

function generateHTML(data) {
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UFT-8">
        <title>My Team</title>
    </head>
    <body>
        <card>
            <p>${data.name}</p>
            <p>Manager</p>
            <p>ID: ${data.ID}</p>
            <p>email: ${data.email}</p>
            <p>Office number: ${data.officeNumber}<p>
        </card>
        <card>
            <p>${data.name}</p>
            <p>Manager</p>
            <p>ID: ${data.ID}</p>
            <p>email: ${data.email}</p>
            <p>Office number: ${data.officeNumber}<p>
        </card>
    </body>
    </html>`;
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), (err) => {
        err ? console.error(err) : console.log("Generating Team");
    });
}

function init () {
    inquirer.prompt(questions) 
    .then((answers) => {
        writeToFile('./index.html', answers);
    });
}


init();





