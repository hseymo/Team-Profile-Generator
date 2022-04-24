const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name,id,email, officeNumber) {
        super(name,id,email, 'Manager');
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    // getRole() inherited from Employee
}    

module.exports = Manager;