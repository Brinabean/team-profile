const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Scott','1234','scott@gmail.com','intern', 'school');
  
    expect(intern.name).toBe('Scott');
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('scott@gmail.com');
    expect(intern.role).toBe('intern');
    expect(intern.school).toBe('school');
});

test('get intern role', () => {
    const intern = new Intern('Scott');

    expect(intern.getRole()).toBe('intern');
})

test('get school name for intern', () => {
    const intern = new Intern('Scott');
  
    expect(intern.getSchool()).toHaveProperty('school');
});