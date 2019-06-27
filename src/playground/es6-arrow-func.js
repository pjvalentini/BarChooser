// babel src/playground/es6-arrow-func.js --out-file=public/scripts/app.js --presets=env,react --watch (Left Terminal cmd)
// live-server public (Rt Terminal)

// ES6 Arrow functions.


// ES5 Example of standard function declaration

function square(x) {
    return x * x;
};
console.log(square(8)); // 64

// ES6 Example...
const squared = (n) => {
    return n * n;
};
console.log(squared(10)); // 100

// ES6 Arrow function expression syntax.
// you dont need a function body if the function oly returns one item
// we do not need to use the return keyword here.

const cubed = (x) => x * x * x;
console.log(cubed(5)); // 125

console.log("************* Exercise **************");

// 1. create regular => function getFirstName.
// 2. create a second => function using the expression syntax.

// 1.) Regular way
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}
console.log(getFirstName("George Washington")) // George

// 2.) expression syntax!
const getAnotherFirstName = (fullName) => fullName.split(' ')[0];
console.log(getAnotherFirstName("PJ Valentini")) // PJ





