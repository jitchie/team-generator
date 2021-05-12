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
        message: "what is your engineer's unique ID?",
        name: "EngineerId",
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
        message: "what is your engineer's email?",
        name: "EngineerEmail",
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
        message: "what is your engineer's github user name?",
        name: "EngineerGitHub",
        validate: async (input) =>{
            if(input.trim(' ') === '') {
                return 'input required'
            } else {
                return true;  
            }
        }
    },
]);

};

let internQuestions = () => {

    inquirer 
.prompt([
    {
//body of each question

    },
]);

};
let managerQuestions = () => {

    inquirer 
.prompt([
    {
//body of each question

    },
]);

};













module.exports = index