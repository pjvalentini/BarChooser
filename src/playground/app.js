console.log("app.js is running");

// ***** THIS IS A REACT PLAYGROUND FOR BUILDING COMPONENTS AND TESTNG OUT DIFFERENT CONCEPTS OF REACT.JS
// ***** Change the template in ReactDOM.render function to see the response from each template.

/* NEW RUN CMDS = yarn run build AND yarn run serve */

// Container Component

// This main component can comminicate will all compoents 
// for the flow of info to be reversed we need to pass functions to our children comp. So that they can manipulate state from Child to Parent

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        {/* Here we want to bind the method handleDeleteOptions to the correct instance */}
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        { /* Here we want to bind the method handlePick to the correct instance */ }
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            // this setup allows for options to be passed down, and configure the default state.
            options: []
        };
    }

    // here we add a lifecycle method, this can only be used for class based stateful components, not stateless functional components.
    // This lifecylce mounts as the page loads the first time.
    // We use this to "fetch" data.
    componentDidMount() {
        // here we will use a "try catch"...to make sure our data is valid json, and that options exist.
        try {
            // we want to read the options array from localStorage so we can see the new array of items on page load.
            // this data will now persist on page load.
            const json = localStorage.getItem("options");
            // we want to get a real JS array back
            const options = JSON.parse(json);

            if (options) {
                // only set state if there are options...if no condtional here. the app will break.
                // setting the new state of the options object
                this.setState(() => ({ options }));
            }   
        } catch(e) {
            // Do nothing at all
        }
        console.log("...fetching the data");
    }

    // this will fire when updates occur...adding items or removing them.
    // we use this to "save" data and set into localStorage.
    componentDidUpdate(prevProps, prevState) {
        // this condition states that if the these 2 states (old state vs current state) do not match then "save the data"
        if (prevState.options.length !== this.state.options.length) {
            // here we will stringify the array through the JSON.stringify method.
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log(json);
            console.log("saving the data");
        } 
    }

    // this fires when a component goes away
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }


    // handleDeleteOptions - will handle wiping the options and will pass the props to our children components.
    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });
        // this is a shorter way for writing this method, implicitly returns an object!
        this.setState(() => ({ options: [] }));
    }

    // This method will handle deleting individual options for more user control.
    handleDeleteOption(optionToRemove) {
        console.log("hdo", optionToRemove);
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                // here we need to cmpare these two parameters.
                // if the 2 are NOT equal it means we do not want to remove that item, it will stay in the array
                // ...otherwise we will remove it once we find a match.
                return optionToRemove !== option;
            })
        }));
    }

    // handlePick - passdown to Action and setup onclick. - bind here.
    // randomize a pick from the options array and alert it..
    handlePick() {
        // genrates a random number.
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        // allows us to grab a choice from an array and alert it to the screen.
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        console.log(option);
        // Adding some validation logic
        // checking to see if an epmty string getts passed in 
        if (!option) {
            return "Enter Valid Value To Add Option!"
        } else if (this.state.options.indexOf(option) > -1) {
            return "This Option Already Exists!"
        } 
        // implicitly returns an object!
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
    }

    render() {
        // we can pass this data into the components as values below.
        const subTitle = "Because Sometimes You Need Some Help With Where To Drink!";
        return (
            <div>
                <Header subTitle={subTitle}/>
               {/* Here we set up hasOptions to measure the length of the array */}
                <Action hasOptions={this.state.options.length} handlePick={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                <AddOptions handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

// Allows us to configure the default state
// IndecisionApp.defaultProps = {
//     options: []
// };

// Stateless functional component
// Working with a default props value here in this component.
const Header = (props) =>  {
    return (
        <div>
            {/* renders the title from the const and value passed in */}
            <h1>{props.title}</h1>
            {/* here we can conditionally render the subtitle...if we ant it gone we can remove it from the Component call in the IndApp Comp */}
            {props.subTitle && <h2>{props.subTitle}</h2> }
        </div>
    );
}

// "Some default" will replace the title if we remove the call from the main conatiner component <IndecisionApp />
Header.defaultProps = {
    title: "Indecision Bar Chooser"
}

// with this stateless component you can pass in props but you do not have access to this.
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>Where should I Go To Drink Tonight?</button>
        </div>
    );
}

// Stateless Component
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove Options</button>
            {/* ADD a little message when there is no data inputted */}
            {props.options.length === 0 && <p>Please add a drinking hole to get started!</p>}
            {
                props.options.map((option) => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />)
            }
        </div>
    );
}

// stateless option component here to nest inside of Options component
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    {/* Here we call on the hDO method and pass in the optionText other wise we are ony logging the onClick Event. */}
                    props.handleDeleteOption(props.optionText);
                }}
                >Remove Option
            </button>
        </div>     
    );
}

// create addOptions compoment
class AddOptions extends React.Component {
   constructor(props) {
       super(props);
       this.handleAddOption = this.handleAddOption.bind(this);
       // here we use this.state to handle the state of our error messages
       this.state = {
        // initially no form is submitted so we are undefined.
         error: undefined
       };
   }
   // This one is doing something when the fom is submitted.
   handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        // set a new state for the error messages, implicitly returns an object!
        this.setState(() => ({ error }));

        // if there is NO error...clear the input field.
        if (!error) {
            e.target.elements.option.value = "";
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// stateless functional component example
// faster than class based components use this method when state is not needed.
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name} </p>
//             <p>Age: {props.age} </p>
//         </div>
//     )
// };

ReactDOM.render(<IndecisionApp options={[/* add default values here in array format if you want to */]}/> , document.getElementById("app"));