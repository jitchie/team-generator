const Employee = require('../lib/employee');
const Intern = require('../lib/intern')
// can set school via constructor
test('can set school via the constructor arguments', () => {
    const school = "USYD";

    const s = new Intern(null,null,null, school);
    expect(s.school).toBe(school);
});
//getRole() should return "intern"
test("can return a string of 'Intern' using the getRole() method", () => {
    const internTest = new Intern();
    
    expect(internTest.getRole()).toBe('Intern');
});
//can get school via getSchool()
test('can set  school via constructor argument', () => {
    const school = 'USYD'

    const s = new Intern(null, null, null, school);
    expect(s.getSchool()).toBe('USYD');
});