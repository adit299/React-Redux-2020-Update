// Import the React and ReactDOM libraries
// Why are these import statement necessary?
// Now that we are using create-react-app, we are using a bundler system
// called webpack, which will be discussed more in detail later

// For now, know that each file is thought of as its own universe, which is why the
// import statements are necessary. Also, know that the name following "import", does
// not necessarily have to be "React", it can be any variable name, the word following
// from has to be dependency or path to the file we are importing

// Recall before that our import statements looked slightly different, something like
// const ____ = require ____

// import is an example of a rule in ES2015 modules which governs how files are shared , 
// On the other hand, require is an example of CommonJS Modules, a different governing rule
// for how files are shared

import React from 'react';
import ReactDOM from 'react-dom'

// Create a react component
// This is an example of a functional component
// const App = function() {
//     return <div>Hi there!</div>
// }
// We can also write it in the form of a ES2015 arrow
// function like the following
// NOTE: make sure that the opening div comes after the return statement
// not on a new line following the return
// If you want to do this, enclose the code being returned by opening and closing parentheses


// function getButtonText() {
//     return 'Click on me!';
// }

const App = () => {
    const buttonText = 'Click Me!';
    // We can pass in numbers and even arrays of strings into the buttonText
    // (passing in an array will show all the characters concatenated together)
    // important thing to note is we cannot pass in JavaScript objects like the
    // following { text: 'Click me'}; jsx will not know how to display this

    // Instead we can write something like {buttonText.text} within the button
    // to display the text
    return <div>
        {/* Note that to define a class in JSX, we have to use
        className as opposed to class to avoid collisions with 
        the class keyword we use in Javascript */}
        <label className="label" htmlFor="name">Enter name:</label>
        <input id="name" type="text" />
        {/* In JSX, in applying styling, we have to surround the styling
        element with two sets of curly braces, one that signifies it is JavaScript
        and the next that signifies it is a JS object. Also, any styling element
        that is two words seperated by a dash becomes the following: background-color = 
        backgroundColor. */}
        {/* Something else to note is that non-jsx properties are usually enclosed 
        in single quotes, while JSX quotes are enclosed in double quotes. This is 
        just community convention */}
        <button style={{backgroundColor: 'blue', color: 'white'}}>
            {/* The curly braces signify that I want to reference a JavaScript object */}
            {/* One way is to directly place the JavaScript object there, another method
            is to write a function and reference it as well */}
            {buttonText}
            {/* {getButtonText()} */}
        </button>
    </div>
}


// Take the react component and show it on the screen
// We supply two elements to ReactDOM, the first one being the react component
// enclosed in a JSX tag, and the second being a selector, which selects an element
// that exists within the index.html file (div with id="root")
ReactDOM.render(
<App />,
document.querySelector('#root')
);
