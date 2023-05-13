//Create a TypeScript class called Person that has private properties name and age, and a public method getDetails that returns a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.


class Person {
    constructor(
        private name: string,
        private age: number) {

    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person = new Person("John", 25);
console.log(person.getDetails());


//Create a TypeScript class called Student that extends the Person class and has an additional private property grade.Define a public method getGrade that returns the student's grade. Use the super keyword to call the constructor of the Person class and initialize the name and age properties.

class Student extends Person {
    constructor(
        name: string,
        age: number,
        private grade: string
    ) {
        super(name, age);
    }
    getGrade(): string {
        return `Grade: ${this.grade}`;
    }
}

const student = new Student("Akib", 18, "A+");

console.log(student.getDetails());
console.log(student.getGrade());
