const Engineer = require('../lib/engineer')
//can set GitHub acc via constructor
test('can set GitHub user name via constructor argument', () => {
    const testGitHub = 'jitchie';

    const g = new Engineer(null, null, null, GitHub);
    expect(g.GitHub).toBe(testGitHub);
});

//get roll() shoulc return "engineer"

//can get Github username via gethib()