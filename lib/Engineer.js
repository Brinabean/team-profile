const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
      super(name, id, email, role);

      this.role = 'engineer';
      this.github = github;
    }

    getRole() {
      return this.role;
    }

    getGithub() {
      return {
        github: this.github
      };
    }

}

module.exports = Engineer;