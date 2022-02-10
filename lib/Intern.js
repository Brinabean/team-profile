const Employee = require('../lib/Employee.js');

class Intern extends Employee {
    constructor(name, id, email, role, school) {
      super(name, id, email, role);

      this.role = 'intern';
      this.school = school;
    }


    getRole() {
        return this.role;
    }

    getSchool() {
        return {
            school: this.school
        };
    }

}

module.exports = Intern;