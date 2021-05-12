class Employee {
    constructor(name, id, email) {  // class constructor function with common properties.
      this.name = name;
      this.id = id;
      this.email = email;
    }

    getName(){
      return this.name;
    }
    getId(){
      return this.id;
    }
    getEmail(){
      return this.email;
    }
    getRole(){
      return 'Employee'
    }
  }// build class constructor function for employee
module.exports = Employee