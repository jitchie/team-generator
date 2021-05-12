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
test('can get name via GetName() method', () => {
    const testGetName = 'jack';

    const n = new Employee(testGetName);
    expect(n.getName()).toBe('jack');
});
test('can get Id via getId() method', () => {
    const testGetId = 1;

    const i = new Employee("foo",testGetId);
    expect(i.getId()).toBe(1);
});
test('can get email via getEmail() method', () => {
    const testEmail = "jwf.ritchie@gmail.com";

    const e = new Employee("foo", 1, testEmail);
    expect(e.getEmail()).toBe("jwf.ritchie@gmail.com");
});
test("getRoll() method should return string 'employee' ", () => {
    const employeeTest = new Employee();

    expect(employeeTest.getRole()).toBe('Employee');
});


