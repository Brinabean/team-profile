const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(name, id, email, role, office) {
      super(name, id, email, role);

      this.role = 'manager';
      this.office = office;
    }

    getRole() {
        return this.role;
    }

    getOffice() {
      return {
        office: this.office
      };
    }

}

module.exports = Manager;