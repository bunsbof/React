/*
class Person {
    name = 'Max'    // Property
    call = () => {...}
}

/* 
Properties are like "variables attached to classes/objects"
ES6:
constructor() {
    this.myProperty = 'value'
}
ES7:
myProperty = 'value'

/*
Methods are like "functions attached to classes/objects"
ES6:
myMethod() {...}

ES7:
myMethod = () => {...}
*/

/*
// Usage (Constructor functions)
const myPerson = new Person()
myPerson.call()
console.log(myPerson.name)

// Inheritance
class Person extends Master
*/

class Human {
    constructor() {
        this.gender = 'male';
    }
    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = 'Bunsbof';
        // this.gender = 'female';
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName()
person.printGender()