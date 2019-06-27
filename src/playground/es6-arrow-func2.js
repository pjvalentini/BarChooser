// babel src/playground/es6-arrow-func2.js --out-file=public/scripts/app.js --presets=env,react --watch (Left Terminal cmd)
// live-server public (Rt Terminal)


// BIG DIFFERENCES WITH ARROW FUNCTIONS TO TAKE NOTE OF
// arguments object is no longer bound with arrow fucntions

console.log("-----------------ES5--------------------")
// ES5 
const add = function(a, b) {
    console.log(arguments); // wil show me passed in arguments but only with an es5 function.
    return a + b;
}
console.log(add(50, 50)) // 100
console.log(add(10, 4)) // 14

console.log("-----------------ES6--------------------")
// ES6
const addNums =  (a, b) => {
    // console.log(arguments); // will not work with es6...
    return a + b;
}
console.log(addNums(50, 50)) // 100
console.log(addNums(10, 4)) // 14

console.log("-----------------ES5--------------------")
// "this" keyword is no longer bound.
// ES5 - Binding with this works in this case.
const user = {
    name: "PJ",
    cities: ["Boston", "Paris", "New York"],
    // when we add a function to an object prop, it is bound to that object
    printPlacesLived: function() {
        // console.log(this.name);
        // console.log(this.cities);

        // that provides a work around....but not a great solution
        const that = this;
        
        // But an anonymous function like this, ther eis no bound "this value" so it gets set to undefined
        this.cities.forEach(function(city) {
            // console.log(this.name = " has lived in " + city);

            // reference 'that'...and it can work but not a great way to do it.
            console.log(that.name = " has lived in " + city);
        });
    }
};
user.printPlacesLived(); // This breaks because this is not boun

console.log("-----------------ES6--------------------")
// ES6 -

const user2 = {
    name: "Bill",
    cities: ["Abu-Dhabi", "Dusseldorf", "Madrid"],
    // this function stays in es5 because it can be bound to the object.
    printPlacesLivedTwo: function() {
        // if we use the arrow function here then we can 
        this.cities.forEach((city) => {
            // we ause arrow function here becasue we do not need it bound here.
            console.log(this.name = " has lived in " + city);
        });
    }
};
user2.printPlacesLivedTwo();

console.log("-----------------ES6 Method Syntax--------------------");

const user3 = {
    name: "Jenn",
    cities: ["Cleveland", "Terre Haute", "Nashville"],
    // New ES6 Method Syntax
    printPlacesLivedThree() {
        // still has access to its own this binding...
        this.cities.forEach((city) => {
            console.log(this.name = " has lived in " + city);
        });
    }
};
user3.printPlacesLivedThree();

console.log("-----------------ES6 map method--------------------");

// const user4 = {
//     name: "Bob",
//     cities: ["Atlanta", "NYC", "Portland"],
//     printPlacesLivedFour() {
//          const cityMessages = this.cities.map((city) => {
//             return this.name + " has lived in " + city;
//         });
//         return cityMessages;
//     }
// };
// console.log(user4.printPlacesLivedFour()); 

// Simplified from above
const user4 = {
    name: "Bob",
    cities: ["Atlanta", "NYC", "Portland"],
    printPlacesLivedFour() {
        return this.cities.map((city) => this.name + " has lived in " + city);
    }
};
console.log(user4.printPlacesLivedFour());


console.log("---------------Challenge:---------------");
// Create a data obj with the following props.

// nums - an array of nums
// multiplyBy - single number
// multiply - retun a new array where nums have been multiplied.

const multiplier = {
    numbers: [10, 20, 30, 40],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());


