const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Scott','1234','scott@gmail.com');
  
    expect(employee.name).toBe('Scott');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('scott@gmail.com');
});

test('get employee info', () => {
    const employee = new Employee('Scott');

    expect(employee.getInfo()).toHaveProperty('id');
    expect(employee.getInfo()).toHaveProperty('email');
});