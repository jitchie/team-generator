const Employee = require('../lib/employee')

// build a test to instantiate instance of Employee
test('Can instantiate Employee instance', () => {
    class Employee {};                              // creates a class of employee with body {}
    expect(new Employee()).toBeInstanceOf(Employee);// using instance matcher we are able to test is new instance of employee was invoked by class constructor
}); 
test('Can set name via class constructor arguments', () => {
    const name = "jack";                            // create a key value pair
    const e = new Employee(name);                   // create a new key and assign to constructor function with a parr of name
    expect(e.name).toBe(name);                      // checks if const e matches const name using jests matcher function .toBe
});
test("Can set email via constructor argument", () => {
    const email = "jwf.ritchie@gmail.com";
    const e = new Employee("Foo", 1, email); //need to pass in params in line with constructor even if testing just for email?
    expect(e.email).toBe(email);
});
test('can set ID via constructor argument', () => {
    const testId = 86;
    const e = new Employee("Foo", testId);
    expect(e.id).toBe(testId);
});



