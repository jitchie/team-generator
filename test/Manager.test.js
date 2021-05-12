const Manager = require('../lib/manager')
//can set office number via Construtor argument
test('can set office number via the constructor argument', () => {
    const officeNumber = "0458868600";

    const o = new Manager(null, null, null, officeNumber);
    expect(o.officeNumber).toBe(officeNumber);
});
//getrole() should return "manager"
test("can get string 'Manager' using the getRole method", () => {
    const testManager = new Manager();

    expect(testManager.getRole()).toBe('Manager');
});
//can get office number via get office()
test('can get office number via the getofficenumber() method', () => {
    const officeNumber = "0458868600";

    const o = new Manager(null, null, null, officeNumber);
    expect(o.getOfficeNumber()).toEqual("0458868600");
});