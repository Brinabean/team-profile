const Manager = require('../lib/Manager.js');

test('creates an manger object', () => {
    const manager = new Manager('Scott','1234','scott@gmail.com','manager', '1234');
  
    expect(manager.name).toBe('Scott');
    expect(manager.id).toBe('1234');
    expect(manager.email).toBe('scott@gmail.com');
    expect(manager.role).toBe('manager');
    expect(manager.office).toBe('1234');
});