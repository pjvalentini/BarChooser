// babel src/playground/counter.js --out-file=public/scripts/app.js --presets=env,react --watch (Left Terminal cmd)
// live-server public (Rt Terminal)

// Working with Events on template Four 
// Note - There is no built in data binding with JSX
// let count = 0;
// here we store our ids in variables and we can add them as jsx to our html button ids.
// let button1Id = "increment";
// let button2Id = "decrement";
// let button3Id = "reset";

// Created three functions for our onClick events
// const addOne = () => {
//     count++;
//     console.log("addOne", count);
//     // make call to update counter
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     console.log("minusOne", count);
//     // make call to update counter
//     renderCounterApp();
// }

// const reset = () => {
//     count = 0;
//     console.log("resetting score", count);
//     // make call to update counter
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');


// Since the rendering happens first, we store in a function that will update the counter.
// const renderCounterApp = () => {
//     const counter = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id={button1Id} onClick={addOne}>+1</button>
//             <button id={button2Id} onClick={minusOne}>-1</button>
//             <button id={button3Id} onClick={reset}>Reset</button>
//         </div>
//     );
// rendering the template.
// takes two arguments the template(JSX you want to render) and the DOM element...where you want to render.
// ReactDOM.render(template, appRoot);
// ReactDOM.render(counter, appRoot);
// };
// We call renderCounterApp to initialize the app.
// renderCounterApp();

// Here is the react version of this app using state ans setState.

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        const stringCount = localStorage.getItem("count")
        const count = parseInt(stringCount, 10)

        if (!isNaN(count)) {
            this.setState(() => ({ count }))
        };
        console.log(count);
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        // Only if the prevState is not equal to the current state do we want to store the value in Local storage.
        const pastCount = prevState.count;
        const currentCount = this.state.count;
        if (pastCount !== currentCount) {
            localStorage.setItem('count', currentCount);
        }
        console.log(currentCount);
        console.log("componentDidUpdate");
    }

        // this is how we call a method on the Componemt instance.
        // here we can pass in the previous state, 0 in this case.
        // updater Functions - best to use this newer method, passing in a function instead of of an object.
        // Like this

        /* this.setState({
              count: 0
           }); */

       // or

        /* this.setState({
              count: this.state.count + 1
           }); */

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        // update function
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

// Counter.defaultProps = {
//     count: 0
// }

ReactDOM.render(<Counter />, document.getElementById("app"));