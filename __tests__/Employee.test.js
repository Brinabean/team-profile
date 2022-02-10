const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Scott','1234','scott@gmail.com');
  
    expect(employee.name).toBe('Scott');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('scott@gmail.com');
});

test('get employee name', () => {
    const employee = new Employee('Scott');

    expect(employee.getName()).toHaveProperty('name');
});

test('get employee id', () => {
    const employee = new Employee('Scott');

    expect(employee.getId()).toHaveProperty('id');
});

test('get employee email', () => {
    const employee = new Employee('Scott');

    expect(employee.getEmail()).toHaveProperty('email');
});

test('get employee role', () => {
    const employee = new Employee('Scott');

    expect(employee.getRole()).toHaveProperty('role');
});

