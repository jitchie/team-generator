const Employee = require('../lib/employee');
const Intern = require('../lib/intern')
// can set school via constructor
test('can get school via getSchool() method', () => {
    const schoolTest = 'USYD'

    const s = new Employee(getSchool(schoolTest));
    expect(s.getSchool()).toEqual('USYD');
});
//get Roll() should return "intern"

//can get school via getSchool()