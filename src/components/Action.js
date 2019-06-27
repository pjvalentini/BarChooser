import React from "react";

// with this stateless component you can pass in props but you do not have access to this.
const Action = (props) =>  (
        <div>
            <button 
                className="big-button" 
                onClick={props.handlePick} 
                disabled={!props.hasOptions}
            >
                Where should I Go To Drink Tonight?
            </button>
        </div>
    );

export default Action