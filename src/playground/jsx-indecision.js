console.log("app.js is running");

// ***** THIS IS A REACT PLAYGROUND FOR BUILDING COMPONENTS AND TESTNG OUT DIFFERENT CONCEPTS OF REACT.JS
// ***** Change the template in ReactDOM.render function to see the response from each template.

// cmd to run webpack > babel src/playground/jsx-indecision.js --out-file=public/scripts/app.js --presets=env,react --watch (terminal one)
// cmd to run files and server is  > live-server public (right terminal)

const obj = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer!",
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

// this function generates a random number
const onMakeDecision = () => {
    // genrates a random number.
    const randomNum = Math.floor(Math.random() * obj.options.length);
    // allows us to grab a choice from an array and alert it to the screen.
    const option = obj.options[randomNum];
    alert(option);
}

// appRoot stores the selection of the app div.
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
            
            { /* obj.options.length === 0 provides logic that will disable the button if there are no options available */ }
            <button disabled={obj.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
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
    // rendering templateThree to the appRoot div in the HTML.
    ReactDOM.render(templateThree, appRoot);
};
render();