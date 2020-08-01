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

const App = () => {
    return <div>Hi there!</div>
}


// Take the react component and show it on the screen
// We supply two elements to ReactDOM, the first one being the react component
// enclosed in a JSX tag, and the second being a selector, which selects an element
// that exists within the index.html file (div with id="root")
ReactDOM.render(
<App />,
document.querySelector('#root')
);
