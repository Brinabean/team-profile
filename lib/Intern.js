const Employee = require('../lib/Employee.js');

class Intern extends Employee {
    constructor(name, id, email, role, school) {
      super(name, id, email);

      this.role = role;
      this.school = school;
    }

}

module.exports = Intern;