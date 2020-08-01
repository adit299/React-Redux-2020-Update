import React from 'react';
import ReactDOM from 'react-dom';


// const App = () => {
//     // We are using the geolocation web API to identify the current
//     // location of the user accessing this web app. Read the documentation
//     // at: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

//     // We utilize two callbacks, one is the success callback, and the other is the error
//     // callback

//     // For debugging purposes, we can set our browser to ask for our location everytime, by
//     // hitting the little "i" next to the website URL, and setting it to ask for our location
//     // by default
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );

//     return <div>Latitude: </div>
// };

// We have moved our functional based React component to a class based
// component

class App extends React.Component {
    // We are intializing state with this line of code, constructor is a JavaScript
    // based function.
    constructor(props) {
        // We call React.Component's constructor function (the parent's)
        super(props);

        // We initialize state to a value, which we know we can obtain later. However,
        // since we are unsure of what that value will be, we initialize it to null
        this.state = { lat: null, errorMessage: '' };

        // We moved this code that attempts to find the current location of the user to
        // inside the constructor so that we can begin attempting to find the user's location
        // as soon the state object is initialized

        // As opposed to Java, note that this is an example of asynchronous code, this code
        // will return the location at some point in the future, the constructor will most
        // probably return before this code is executed
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // NOTE: WE NEVER WANT TO DIRECTLY ACCESS THE STATE OBJECT, WE ALWAYS
                // WANT TO USE SETSTATE TO MODIFY STATE
                this.setState({ lat: position.coords.latitude });
            },
            err => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    // Every class based component requires render
    render() {
        // window.navigator.geolocation.getCurrentPosition(
        //     (position) => console.log(position),
        //     (err) => console.log(err)
        // );

        // Quick Tip: remember that we cannot leave semi-colons
        // at the end of JSX tags, you will end up with a very difficult
        // error to decipher

        // We are adding these conditionals, so that error is not constantly
        // rendered on screen
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }
        
        return <div>Loading!</div> 

        // <div>
        //     Latitude: {this.state.lat}
        //     <br />
        //     Error: {this.state.errorMessage}
        // </div>
    
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);


