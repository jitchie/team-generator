const Engineer = require('../lib/engineer')
//can set GitHub acc via constructor
test('can set GitHub user name via constructor argument', () => {
    const GitHub = "jitchie";

    const g = new Engineer(null, null, null, GitHub);
    expect(g.GitHub).toBe(GitHub);
});
//getrole() shoulc return "engineer"
test("can get string 'Engineer' using the getRole() method", () => {
    const engineerTest = new Engineer();

    expect(engineerTest.getRole()).toBe('Engineer');
});
//can get Github username via gethib()
test('can get github via github() method', () => {
    const GitHub = "jitchie";

    const g = new Engineer(null, null, null, GitHub);
    expect(g.getGitHub()).toBe('jitchie');
});