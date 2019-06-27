// babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch (Left Terminal cmd)
// live-server public (Rt Terminal)

var nameVar = "PJ";
var nameVar = "Bill";
console.log("nameVar:", nameVar);

// ES6

// LET
// you can re-assign a new let but not redeclare it.
let nameLet = "Jenn";
// let nameLet = "Bob" // Will not work since we already have a var names nameLet
nameLet = "Jojo"; // ok because we can reassign.
console.log("nameLet:", nameLet);

// CONST

const nameConst = "AssFace";
// CANT DO EITHER OF THESE...
// nameConst = "New Name"
// const nameConst = "New Name";
console.log("nameConst", nameConst);

// SCOPING IN ES6

function getPetName() {
    const petName = "BiffTheCat";
    return petName;
}
const petName = getPetName();
console.log(petName);

// Function scoping in ES5
// var based variables are function scoped.

var fullname = "PJ Valentini";

if (fullname) {
    var firstname = fullname.split(" ")[0];
    console.log(firstname);
}
console.log(firstname);


// ES6 - Block scoping

const fullName = "Bill Clinton";
let firstName;

if (fullName) {
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}
console.log(firstName);

