//need inquier
const inquirer = require('./node_modules/inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const renderHtml = require('./html');
const Intern = require('./lib/intern');
const teamArr = [];
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
    let engineer = new Engineer(engineerResponse.engineerName, engineerResponse.engineerId, engineerResponse.engineerEmail, engineerResponse.GitHub);
        teamArr.push(engineer);
    
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
console.log(internResponse);
    let intern = new Intern(internResponse.internName, internResponse.Id, internResponse.internEmail, internResponse.internSchool);
        teamArr.push(intern);
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
        teamArr.push(manager);
console.log(manager);
console.log(teamArr);//repeat this for engineer and

    // if (teamArr.length === 0) {
    //     teamArr.push(managerResponse);
    // };
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



buildTeam = () => {
    
    renderHtml(teamArr);
    };

