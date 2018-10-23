class Company {
    constructor() {
        this.employees = new Array()
    }

    addEmployee(newEmployee) {
        this.employees = [...this.employees, newEmployee]
        console.log(this.employees)
    }

    getEmployeeIndexById(id) {
        for (let index in this.employees) {
            if(this.employees[index].id === id) {
                return index
            }
        }

        return -1
    }

    getEmployeeById(id) {
        for (let emp of this.employees) {
            if(emp.id === id) {
                return emp
            }
        }

        return undefined
    }

    deleteEmployeeById(id) {
        let index = this.getEmployeeIndexById(id)
        console.log(index)
        if(index >= 0) {
            this.employees.splice(index, 1)
            console.log(this.employees)
        }
    }

    editEmployee(employee) {
        let index = this.getEmployeeIndexById(employee.id)
        if (index >= 0) {
            this.employees[index] = employee
        }
    }

    getEmployeesByName(name) {
        let employees = new Array()

        name = name.trim().toLowerCase()
        for(let employee of this.employees) {
            let employeeName = employee.fullname.trim().toLowerCase()
            if(employeeName.search(name) !== -1) {
                employees = [...employees, employee]
            }
        }

        return employees
    }

    
}