import React from "react";

// stateless option component here to nest inside of Options component
const Option = (props) => (
        <div className="option">
            <p className="option__text">{props.count}. {props.optionText}</p>
            <button 
                className="button button--link"
                onClick={(e) => {
                    {/* Here we call on the hDO method and pass in the optionText other wise we are ony logging the onClick Event. */}
                    props.handleDeleteOption(props.optionText);
                }}
                >Remove Option
            </button>
        </div>     
    );

export default Option;