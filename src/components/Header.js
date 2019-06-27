import React from "react";

// Stateless functional component
// Working with a default props value here in this component.
const Header = (props) => (
        <div className="header">
            <div className="container">
                {/* renders the title from the const and value passed in */}
                <h1 className="header__title">{props.title}</h1>
                {/* here we can conditionally render the subtitle...if we ant it gone we can remove it from the Component call in the IndApp Comp */}
                {props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2> }
            </div>
            
        </div>
    );

export default Header;
