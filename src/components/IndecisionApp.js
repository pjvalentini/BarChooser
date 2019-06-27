import React from "react";
import Header from "./Header"
import Action from "./Action";
import AddOptions from "./AddOptions";
import Options from "./Options";
import OptionModal from "./OptionModal";


// Container Component

// This main component can comminicate will all compoents 
// for the flow of info to be reversed we need to pass functions to our children comp. So that they can manipulate state from Child to Parent

// *** Refactored to es6 class properties ***
// We do this to reduce the need for code to bind our methods to a class instance.
// METHODS NOW BECOME CLASS PROPERTIES.

class IndecisionApp extends React.Component {
    state = {
        // this setup allows for options to be passed down, and configure the default state.
        options: [],
        // state for OptionModal comp. passed into OM below.
        selectedOption: undefined
    };
    // WE NO LONGER NEED THE CONSTRUCTOR.
    // constructor(props){
    //     super(props);
    //     {/* Here we want to bind the method handleDeleteOptions to the correct instance */}
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     { /* Here we want to bind the method handlePick to the correct instance */ }
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
        
    // }

        // CLASS PROPERTY
        // handleDeleteOptions - will handle wiping the options and will pass the props to our children components.
        handleDeleteOptions = () => {
            // this.setState(() => {
            //     return {
            //         options: []
            //     };
            // });
            // this is a shorter way for writing this method, implicitly returns an object!
            this.setState(() => ({
                options: []
            }));
        };

        // CLASS PROPERTY
        // This method will handle deleting individual options for more user control.
        handleDeleteOption = (optionToRemove) => {
            console.log("hdo", optionToRemove);
            this.setState((prevState) => ({
                options: prevState.options.filter((option) => {
                    // here we need to cmpare these two parameters.
                    // if the 2 are NOT equal it means we do not want to remove that item, it will stay in the array
                    // ...otherwise we will remove it once we find a match.
                    return optionToRemove !== option;
                })
            }));
        };

        // CLASS PROPERTY
        // handlePick - passdown to Action and setup onclick. - bind here.
        // randomize a pick from the options array and alert it..
        handlePick = () => {
            // genrates a random number.
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            // allows us to grab a choice from an array and alert it to the screen.
            const option = this.state.options[randomNum];
            console.log(option); 
             this.setState(() => ({
                 selectedOption: option
             }));
        };

        // CLASS PROPERTY
        handleAddOption = (option) => {
            console.log(option);
            // Adding some validation logic
            // checking to see if an epmty string getts passed in 
            if (!option) {
                return "Enter Valid Value To Add Option!"
            } else if (this.state.options.indexOf(option) > -1) {
                return "This Option Already Exists!"
            }
            // implicitly returns an object!
            this.setState((prevState) => ({
                options: prevState.options.concat([option])
            }));
        };

         // CLASS PROPERTY
         handleClearSelectedOption = () => {
             this.setState(() => ({
                 selectedOption: undefined
             }));
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
    };

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
    };

    // this fires when a component goes away
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        // we can pass this data into the components as values below.
        const subTitle = "Because Sometimes You Need Some Help With Where To Drink!";
        return (
            <div>
                <Header subTitle={subTitle}/>
               {/* Here we set up hasOptions to measure the length of the array */}
               <div className="container">
                    <Action hasOptions={this.state.options.length} handlePick={this.handlePick}/>
                    <div className="widget">
                        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                        <AddOptions handleAddOption={this.handleAddOption}/>
                    </div>
               </div>
               <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
            </div>
        );
    };
}

// Allows us to configure the default state
// IndecisionApp.defaultProps = {
//     options: []
// };

// "Some default" will replace the title if we remove the call from the main conatiner component <IndecisionApp />
Header.defaultProps = {
    title: "React Bar Chooser"
}

export default IndecisionApp;