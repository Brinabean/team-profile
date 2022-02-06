class Employee {
    constructor(name,id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getInfo() {
        return {
            id: this.id,
            email: this.email
        };
    }
}

module.exports = Employee;