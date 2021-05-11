const Employee = require('../lib/employee')

// build a test to instantiate instance of Employee
test('Can instantiate Employee instance', () => {
    class Employee {};                              // creates a class of employee with body {}
    expect(new Employee()).toBeInstanceOf(Employee);// using instance matcher we are able to test is new instance of employee was invoked by class constructor 
    });
// Can set name via Constructor arguments
test('Can set name via class constructor arguments', () => {
    const name = "jack";                            // create a key value pair
    const e = new Employee(name);                   // create a new key and assign to constructor function with a parr of name
    expect(e.name).toBe(name);                      // checks if const e matches const name using jests matcher function .toBe
    });
//can set email via constructor argument
test('Can set ID via constructor argument', () => {
        const email = "jwf.ritchie@gmail.com";           //replace name with email and follow steps above
        const x = new Employee(email);
        expect(x.email).toBe(mail);
    });

//can set ID via Constructor argument

//can set email via constructor argument

//can get name via get Id()

// can get email via getEmail()

//get roll() should return "Emloyee"




// Can set name via Constructor arguments

//can set ID via Constructor argument

//can set email via constructor argument

//can get name via get Id()

// can get email via getEmail()

//get roll() should return "Emloyee"