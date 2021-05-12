const Employee = require("./employee");

class Intern extends Employee{
    constructor(name, id, email, school){
    super(name, id, email);
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    }
    getSchool(){
        return
    }
    getRole(){
        return 'Intern'
    }
}

module.exports = Engineer


module.exports = Intern