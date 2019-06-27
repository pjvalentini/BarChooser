import React from "react";

// create addOptions compoment
class AddOptions extends React.Component {
    state = {
        error: undefined
    };
// WE CAN REMOVE THIS NOW BECAUSE WE CAN MAKE THIS METHOD A CLASS PROPERTY    
//    constructor(props) {
//        super(props);
//        this.handleAddOption = this.handleAddOption.bind(this);
//        // here we use this.state to handle the state of our error messages
//    }
   // This one is doing something when the form is submitted.
   handleAddOption = (e) => {
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
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="add-option-button">Add Option</button>
                </form>
            </div>
        );
    };
}

export default AddOptions;