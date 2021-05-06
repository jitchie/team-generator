const Employee = require('../lib/employee')

describe("Employee", () => {
    // build a test to instantiate instance of Employee
    it ('Can instantiate Employee instance', () => {
        class Employee {};                              // creates a class of employee with body {}
        expect(new Employee()).toBeInstanceOf(Employee);// using instance matcher we are able to test is new instance of employee was invoked by class constructor 
    });
    // Can set name via Constructor arguments
    it('Can set name via class constructor arguments', () => {
        
    
    })

//can set ID via Constructor argument

//can set email via constructor argument

//can get name via get Id()

// can get email via getEmail()

//get roll() should return "Emloyee"

})


// Can set name via Constructor arguments

//can set ID via Constructor argument

//can set email via constructor argument

//can get name via get Id()

// can get email via getEmail()

//get roll() should return "Emloyee"