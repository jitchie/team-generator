const inquirer = require('./node_modules/inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const renderHtml = require('./html');
const Intern = require('./lib/intern');
const teamArray = [];
const teamMemberid = [];
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "index.html");
const render = require("./html.js");
//write first series of questions
//and put these questions into a function (engineer, intern, manager)
function appMenu() {
let addEngineer = () => {
inquirer .prompt([
{
    type: "input",
    message: "what's your engineer's name?",
    name: "eningeerName",
    validate: async (input) => {
        if(input.trim(' ') === '') {
            return 'input required'
        } else {
            return true;  
        }
}
},
{
    type: "input",
    message: "what is your engineer's unique ID?",
    name: "EngineerId",
    validate: async (input) => {
        if (input.trim(' ') === '') {
            return 'input required'
        } if (teamMemberid.indexOf(input) > -1) {
            return 'ID already exists'
            } else {
            return true;  
        }
    }
},
{
    type: "input",
    message: "what is your engineer's email?",
    name: "EngineerEmail",
    validate: async (input) => {
        if(input.trim(' ') === '') {
            return 'input required'
        } else {
            return true;  
        }
    }
},
{
    type: "input",
    message: "what is your engineer's github user name?",
    name: "EngineerGitHub",
    validate: async (input) => {
        if(input.trim(' ') === '') {
            return 'input required'
        } else {
            return true;  
        }
    }
},
])
.then(engineerResponse => {

let engineer = new Engineer(engineerResponse.engineerName, engineerResponse.EngineerId, engineerResponse.EngineerEmail, engineerResponse.EngineerGitHub);
teamArray.push(engineer);
createTeam();
})
.catch(error => {
console.log(error);
})
};
let addIntern = () => {
inquirer
.prompt([
{
    type: "input",
    message: "what is your Interns's name?",
    name: "internName",
    validate: async (input) =>{
        if(input.trim(' ') === '') {
            return 'input required'
        } else {
            return true;  
        }
    }
},
{
    type: "input",
    message: "what is your interns's unique ID?",
    name: "internId",
    validate: async (input) =>{
        if(input.trim(' ') === '') {
            return 'input required'
        } if (teamMemberid.indexOf(input) > -1) {
            return 'ID already exists'
        } else {
            return true;  
        }
    }
},
{
    type: "input",
    message: "what is your interns's email?",
    name: "internEmail",
    validate: async (input) => {
        if(input.trim(' ') === '') {
            return 'input required'
        } else {
            return true;  
        }
    }
},
{
    type: "input",
    message: "what is your interns's school?",
    name: "internSchool",
    validate: async (input) => {
        if(input.trim(' ') === '') {
            return 'input required'
        } else {
            return true;  
        }
    }
},
])
.then(internResponse => {
let intern = new Intern(internResponse.internName, internResponse.internId, internResponse.internEmail, internResponse.internSchool);
    teamArray.push(intern);
    
createTeam();
})
.catch(error =>{

console.log(error)
})
};
let addManager = () => {
inquirer
.prompt([
{
    type: "input",
    message: "what is your manager's name?",
    name: "managerName",
    validate: async (input) =>{
        if(input.trim(' ') === '') {
            return 'input required'
        } else {
            return true;  
        }
    }
},
{
    type: "input",
    message: "what is your managers's unique ID?",
    name: "ManagersId",
    validate: async (input) =>{
        if(input.trim(' ') === '') {
            return 'input required'
        } if(teamMemberid.indexOf(input) > -1) {
            return 'ID already exists'
        } else {
            return true;  
        }
    }
},
{
    type: "input",
    message: "what is your managers's email?",
    name: "managerEmail",
    validate: async (input) =>{
        if(input.trim(' ') === '') {
            return 'input required'
        } else {
            return true;  
        }
    }
},
{
    type: "input",
    message: "what is your managers's office number?",
    name: "managerOfficeNumber",
    validate: async (input) =>{
        if(input.trim(' ') === '') {
            return 'input required'
        } else {
            return true;  
        }
    }
},
])
.then(managerResponse => {

let manager = new Manager(managerResponse.managerName, managerResponse.ManagersId, managerResponse.managerEmail, managerResponse.managerOfficeNumber);
    teamArray.push(manager);
createTeam();
})
.catch(error => {
console.log(error)
})
};
console.log(teamArray, " team array")
function createTeam() {
inquirer.prompt([
{
    type: "list",
    name: "memberChoice",
    message: "Which type of team member would you like to add?",
    choices: [
    "Engineer",
    "Intern",
    "I don't want to add any more team members"
    ]
}
]).then(userChoice => {
switch (userChoice.memberChoice) {

    case "Engineer":
    addEngineer();
    break;
    case "Intern":
    addIntern();
    break;
    case "I don't want to add any more team members":
    buildTeam();
    break;
    default:
    buildTeam();
}
});

}
addManager()
function buildTeam () {

 
if (!fs.existsSync(OUTPUT_DIR)) {
fs.mkdirSync(OUTPUT_DIR)
}
fs.writeFileSync(outputPath, render(teamArray), "utf-8");
console.log('your file has been created');
}
}
appMenu();