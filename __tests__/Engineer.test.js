const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Scott','1234','scott@gmail.com','engineer', 'github');
  
    expect(engineer.name).toBe('Scott');
    expect(engineer.id).toBe('1234');
    expect(engineer.email).toBe('scott@gmail.com');
    expect(engineer.role).toBe('engineer');
    expect(engineer.github).toBe('github');
});