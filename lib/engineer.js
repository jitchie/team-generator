const Employee = require("./employee");

class Engineer extends Employee{
    constructor(name, id, email, GitHub){
    super(name, id, email);//test this if it works without
    this.name = name;
    this.id = id;
    this.email = email;
    this.GitHub = GitHub;
    }
    getGitHub(){
        return this.GitHub;
    }
    getRole(){
        return 'Engineer'
    }
};

module.exports = Engineer