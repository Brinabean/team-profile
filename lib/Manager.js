const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(name, id, email, role, office) {
      super(name, id, email);

      this.role = role;
      this.office = office;
    }

}

module.exports = Manager;