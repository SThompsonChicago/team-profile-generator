//Include packages
const fs = require('fs');
const inquirer = require('inquirer');
//const Employee = require('employee');
//const Manager = require('manager');

const questionsManager = [
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
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "next",
        choices: ["Engineer", "Intern", "I don't want to add another team member."],
    }
];

const questionsEngineer = [
    {
        message: "What is your engineer's name?",
        name: "name",
    },
    {
        message: "What is your engineer's ID?",
        name: "ID",
    },
    {
        message: "What is your engineer's email?",
        name: "email",
    },
    {
        message: "What is your engineer's github username?",
        name: "gitName",
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "next",
        choices: ["Engineer", "Intern", "I don't want to add another team member."],
    }
];

const questionsIntern = [
    {
        message: "What is your intern's name?",
        name: "name",
    },
    {
        message: "What is your intern's ID?",
        name: "ID",
    },
    {
        message: "What is your intern's email?",
        name: "email",
    },
    {
        message: "What is your intern's school?",
        name: "school",
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "next",
        choices: ["Engineer", "Intern", "I don't want to add another team member."],
    }
];

const questionsNext = [
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "next",
        choices: ["Engineer", "Intern", "I don't want to add another team member."],
    },
    
];

function generateManagerHTML(string, data) {
    string = `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UFT-8">
        <title>My Team</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            My Team
        </header>` +
        `<div class="boxes">
            <p>${data.name}</p>
            <p>Manager</p>
            <p>ID: ${data.ID}</p>
            <p>email: ${data.email}</p>
            <p>Office number: ${data.officeNumber}<p>
        </div>`;
}

function generateEngineerHTML(string, data) {
    string += 
    `<div class="boxes">
        <p>${data.name}</p>
        <p>Manager</p>
        <p>ID: ${data.ID}</p>
        <p>email: ${data.email}</p>
        <p>Office number: ${data.gitName}<p>
    </div>`;
}

function generateEndHTML(string) {
    string += + 
    `</body>
    </html>`;
    return string;
}



function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), (err) => {
        err ? console.error(err) : console.log("Please build your team");
    });
}

function init() {
    var next;
    var str = "";
    inquirer.prompt(questionsManager)
    .then((answers) => {
        next = answers.next;
        generateManagerHTML(str, answers);
        switch(next) {
            case "Engineer":
                inquirer.prompt(questionsEngineer)
                .then((answers) => {
                    next = answers.next;
                    generateEngineerHTML(str, answers);
                    console.log(str);
                });
                break;
            case "Intern":
                inquirer.prompt(questionsIntern)
                .then((answers) => {
                    next = answers.next;
                });
                break;
            default:
                console.log("thanks");
        }
    });
    return str;
}

str = init();

console.log(str);


