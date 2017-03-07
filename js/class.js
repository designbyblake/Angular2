class Person {
    constructor(firstName, lastName) {
        this.firstName = '';
        this.lastName = '';
        this.firstName = firstName;
        this.lastName = lastName;
    }
    name() {
        return `${this.firstName} ${this.lastName}`;
    }
    whoAreYou() {
        return `Hi i'm ${this.name()}`;
    }
}
class Student extends Person {
    constructor(firstName, lastName, course) {
        super(firstName, lastName);
        this.course = '';
        this.course = course;
    }
    whoAreYou() {
        return `${super.whoAreYou()} and i'm studying ${this.course}`;
    }
}
let dan = new Person('Dan', 'Blake');
console.log(dan.whoAreYou());
let studentDan = new Student('Dan', 'Blake', 'Angular2');
console.log(studentDan.whoAreYou());
