console.log("app.js is running");

import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css"
import "./styles/styles.scss";

/* NEW RUN CMDS = yarn run build AND yarn run serve or just yarn run dev-server */

ReactDOM.render(<IndecisionApp options={[/* add default values here in array format if you want to */]}/> , document.getElementById("app"));








// class OldSyntax {
//     constructor() {
//         this.name = "PJ";
//         // 3. we can fix this by binding to the proper instance.
//         this.getGreeeting = this.getGreeeting.bind(this);
//     }
//     getGreeeting() {
//         return `Hi my name is ${this.name}.`;
//     }
// }
// const oldSyntax = new OldSyntax();
// // 1. here is how we can break the binding 
// const getGreeeting = oldSyntax.getGreeeting;
// console.log(oldSyntax);
// console.log(getGreeeting()); // 2. error! binding is broken from string in a new var.
// console.log(oldSyntax.getGreeeting());

// console.log("-------------------------------------")

// class NewSyntax {
//     name = "Jen";
//     getGreeeting = () => {
//         return `Hi my name is ${this.name}.`;
//     }
// }

// const newSyntax = new NewSyntax();
// console.log(newSyntax);