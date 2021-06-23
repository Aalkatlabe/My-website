export default class Student {
    constructor(name, emailAdres, password) {
        this.name = name;
        this.emailAdres = emailAdres;
        this.password = password;
    }
    getName() {
        return this.name;
    }
    getEmailAdres() {
        return this.emailAdres;
    }
    getPassword() {
        return this.password;
    }
}