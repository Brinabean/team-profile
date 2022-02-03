const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
      super(name, id, email);

      this.role = role;
      this.github = github;
    }

}

module.exports = Engineer;