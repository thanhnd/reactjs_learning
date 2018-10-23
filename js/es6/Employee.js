class Employee {
    constructor(id, fullname, email, password, workingDate, title) {
        this.id = id
        this.fullname = fullname
        this.email = email
        this.password = password
        this.workingDate = workingDate
        this.title = title

        this.reference = [id, fullname, email, workingDate, title]
    }
}