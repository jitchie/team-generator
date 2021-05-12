//need inquier
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern') 


//write first series of questions
//and put these questions into a function (engineer, intern, manager)
let engineer = () => {
inquirer 
.prompt([
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
            if(input.trim(' ') === '') {
                return 'input required'
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
    console.log(engineerResponse);
})
.catch(error => {
    console.log(error);
})
};

let internQuestions = () => {

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
console.log(internResponse);
})
.catch(error =>{
    console.log(error)
})
};




let managerQuestions = () => {
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
    console.log(managerResponse);
})
.catch(error => {
    console.log(error)
})

};

module.exports = index