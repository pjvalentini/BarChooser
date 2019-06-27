console.log("utils.js is running!")

// export const square = (x) => x * x;
const square = (x) => x * x;
// export const add = (a, b) => a + b;
const add = (a, b) => a + b;


const subtract = (a, b) => a - b;

export default subtract;

// Even this works! You dont need the variable.
// export default (a, b) => a - b;

// setup for a "named" export.
// also using a default export as well.
export { square, add };


