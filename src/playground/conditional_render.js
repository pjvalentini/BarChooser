// babel src/playground/conditional_render.js --out-file=public/scripts/app.js --presets=env,react --watch (Left Terminal cmd)
// live-server public (Rt Terminal)

// CONDITIONAL RENDERING EXERCISE
// only render the subtitle and ptag and check if subtitle exits - logical and or operator
// create and brand new prop on app called options with an array.
// render a new ptag - if options.length > 0 "Here are your options" else "No options" Ternary operator

// ADDED SOME EVENT HANDLERS WITH BUTTONS ON FORM SUBMISSION

const obj = {
    title: "Conditional Render",
    subtitle: "This is cool!",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log("form submitted");
    const option = e.target.elements.option.value;
    
    if(option) {
       obj.options.push(option); 
       console.log(option); // see option
       console.log(obj.options); // See array of options
       e.target.elements.option.value = "";
       render();
    }
};

const removeOptions = () => {
        obj.options = [];
        console.log(obj.options); // Should see empty array
        render();
};

const appRoot = document.getElementById('app');

const render = () => {
        const templateThree = (
        <div>
            <h1>{obj.title}</h1>
            {/* if no subtitle then do not render a ptag */}
            {obj.subtitle && <p>{obj.subtitle}</p>}
            { /* if options is greater than zero render a new ptag with a message */ }
            <p>{obj.options.length > 0 ? "Here are your options" : "No options"}</p>
            { /* another way of doing it */ }
            { /* obj.options.length > 10 ? <p>Here are your options</p> : <p>No options</p> */}
            
            <p>{obj.options.length}</p>

            <button onClick={removeOptions}>Remove Options</button>

            <ol>
        { /* Arrays ARE Supported by JSX!!! */ }
        { /* map through obj, we will throw unique key prop err if we do not use a key here. */ }
                {
                    // obj.options.map((option) => {
                    //     return <li key={option}>Option: {option}</li>
                    // })
            
                    // same as
                    
                    obj.options.map((option) => <li key={option}>Option: {option}</li>)
                }
            </ol>
            
            { /* Here we add an onSubmit event handler */ }
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(templateThree, appRoot);
};
render();