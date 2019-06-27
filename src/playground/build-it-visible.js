// babel src/playground/build-it-visible.js --out-file=public/scripts/app.js --presets=env,react --watch
// live-server public

// This is a small react app that will toggle show or hiding a phrase from a button click.
console.log("Working and Connected!");

// const app = {
//     title: "Visible Toggle",
// }

// // set visibility to false first.. as this is the initial state of the app.
// let visibility = false;

// const toggleVisibility = () => {
//     {/* this can set the vis back and forth to true/false */}
//     visibility = !visibility;
//     { /* make sure to call render() here */ }
//     render();
// }

// // appRoot stores the selection of the app div.
// const appRoot = document.getElementById('app');

// const render = () => {
//     const visibleToggle = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleVisibility}>
//             {/* tern op that checks if visibility is false then show details */}
//                 {visibility ? "Hide Details" : "Show Details"}
//             </button>
//             { /* check is visibility is TRUE, AND if so...render something. */ }
//             {visibility && (
//                 <div>
//                     <p>Hey. Here are some detials you can see!</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(visibleToggle, appRoot);
// };
// render();



// React version of the toggler with state.

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        // this gives us acces to this.setState...
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                // here we use the bang to change the condition of visibility.
                visibility: !prevState.visibility
            }
        });
    }
     render() {
            return(
                <div>
                    <h1>Visibility Toggle</h1>
                    <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                    {this.state.visibility && (
                        <div>
                            <p>You can see the details now!</p>
                        </div>
                    )}
                </div>
            );
        };
    };

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
