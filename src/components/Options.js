import React from "react";
import Option from "./Option";

// Stateless Component
const Options = (props) => (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Bar Options</h3>
                <button 
                    className="button button--link"
                    onClick={props.handleDeleteOptions}
                >Remove All
                </button>
            </div>
            
                    {/* ADD a little message when there is no data inputted */}
                    {props.options.length === 0 && <p className="message">Please add a drinking hole to get started!</p>}
                {
                    props.options.map((option, index) => <Option key={option} optionText={option} count={index + 1} handleDeleteOption={props.handleDeleteOption} />)
                }
        </div>
    );

export default Options;