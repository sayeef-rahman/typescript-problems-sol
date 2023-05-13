// Write a function that takes in an array of objects with properties name and age, and returns only the objects where the Student's age is greater than or equal to 18,


type Student = {
    name: string;
    age: number;
}

function arrayOfObj(people: Student[]): Student[] {
    return people.filter(student => student.age >= 18);
}

const people: Student[] = [
    { name: "Sakib", age: 22 },
    { name: "Isan", age: 17 },
    { name: "Marly", age: 28 }
];

const adults: Student[] = arrayOfObj(people);
console.log(adults);
