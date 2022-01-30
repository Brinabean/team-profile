const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Scott');
  
    expect(enemy.name).toBe('Scott');
    expect(enemy.Role).toEqual(expect.any(Object));
    expect(enemy.id).toEqual(expect.any(Number));
    expect(enemy.email).toEqual(expect.any(Object));
});