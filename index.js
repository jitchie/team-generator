//need inquier
const inquirer = require('./node_modules/inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern') 

const team = [];
const teamMemberid = [];


//write first series of questions
//and put these questions into a function (engineer, intern, manager)
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
    console.log(engineerResponse);
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
    team.push(internResponse);
    console.log(JSON.stringify(team));
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
            } if(idList.indexOf(input) > -1) {
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
    console.log(managerResponse);
    if (team.length === 0) {
        team.push(managerResponse);
    };
    console.log('team array' + JSON.stringify(team));
    
    createTeam();
    
    
})
.catch(error => {
    console.log(error)
})

};

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
        default:
        buildTeam();
    }
    });
}
addManager();

function teamIdValidation(){

};


//build team function pushes to an array team,
//team array is then filtered into manager, engineer and intern,
// id needs to be pushed to an array and needs validation on values within as to not double up

buildTeam = () => {
    // build .push to array then filter array for cards.(maybe another function for html css)
    
};
