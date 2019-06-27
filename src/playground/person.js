console.log("person.js is running!");

// const isAdult = (age) => {
//     if (age >= 18) {
//         return "You are an adult!"
//     } else {
//         return "Wahhh, Wahhh, I need a diaper Mommy!";
//     };
// };

// const canDrink = (legalAge) => {
//     if (legalAge >= 21) {
//         return "You can drink up buddy!"
//     } else {
//         return "No Way Jose! No drinks for you!"
//     }
// }

// Short hand refactor these will return a boolean value.
const isAdult = (age) => age >= 18;
const canDrink = (legalAge) => legalAge >= 21;

const isSenior = (socialSecurityAge) => socialSecurityAge >= 65;

// exported as named exports.
export { isAdult, canDrink };

// exported as default.
export default isSenior;