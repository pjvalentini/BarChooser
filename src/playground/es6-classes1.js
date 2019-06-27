// Exercise in ES6 classes and sub classes.

// babel src/playground/es6-classes1.js --out-file=public/scripts/app.js --presets=env,react --watch (Left Terminal cmd)
// live-server public (Rt Terminal)

// an es6 class is like a blueprint

console.log("Connected!");

// Create Person class
// You must use moethod definition syntax
class Person {
    constructor(name, location = "an Invalid Location", age = 0, sign = "No sign identified") { // default value on location can be used here.
        // or operator can be used here.
        this.name = name || "Anonymous";
        this.location = location;
        this.age = age;
        this.sign = sign;
    }
    getGreeting() {
        // return "Hello " + this.name + " you are in " + this.location + " and I'm " + this.age;
        // template literal.
        return `Hello, I am ${this.name} and I am in ${this.location} and I'm ${this.age} years old`;
    }
    getSign() {
        return `${this.name} is a ${this.sign}`
    }
}

// Set up a sub class Student that extends the use of Person
class Student extends Person {
    constructor(name, age, location, sign, major) {
        // super refers to the parent class Person so we do not need to set up our props again.
        super(name, age, location, sign);
        this.major = major;
    }
    hasMajor() {
        return !! this.major // tests for true of false with the double bang
    }
    // here we can reassign the function getGreeting() and change its behavior
    getGreeting() {
        let greeting = super.getGreeting();
        // check if the student has a major in this function
        if(this.hasMajor()) {
            greeting += ` and my major is ${this.major},` ;
        }
        return greeting;
    }
}

class Traveler extends Person {
    constructor(name, age, location, sign, major, homeLocation) {
        super(name, age, location, sign, major);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !! this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation) {
           greeting += ` and my homebase is ${this.homeLocation}.`
        }
        return greeting;
    }
}

// new instance of Person class
const me = new Person("PJ", "NYC", 11, "Capricorn", "Im just a kid dude!")
console.log(me.getGreeting()); 
console.log(me.getSign());

// make a newer instance but do not pass in anything
// since the or operator is there in the constructor we can get some info back if the Person method is left blank.
const otherPerson = new Person();
console.log(otherPerson.getGreeting());
console.log(otherPerson.getSign());

console.log("-----------SUB CLASS LOGS BELOW------------");

// class Student takes on the parameters of Person as we extended it to use Person's data.
const student1 = new Student("Jill", "Nashville", 22, "Pisces", "Computer Science", "New York");
console.log(student1);
console.log(student1.hasMajor());
console.log(student1.getGreeting());

const student2 = new Student();
console.log(student2);
console.log(student2.hasMajor());
console.log(student2.getGreeting());

const traveler = new Traveler ("Biff", "Seattle", 34, "Virgo", "Accounting", "Philadelphia");
console.log(traveler);
console.log(traveler.hasHomeLocation());
console.log(traveler.getGreeting());

const traveler2 = new Traveler();
console.log(traveler2);
console.log(traveler2.hasHomeLocation());
console.log(traveler2.getGreeting());