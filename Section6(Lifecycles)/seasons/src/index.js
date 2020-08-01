import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {

    // constructor(props) {
        
    //     super(props);

    //     this.state = { lat: null, errorMessage: '' };

    // }

    // We can remove the constructor, and the call to the parent since by just adding the
    // line of code below, babel will take care of the rest, adding in the contructor and 
    // the rest of the code itself

    state = { lat: null, errorMessage: '' };

    // Lifecycle methods:
    // componentDidMount: Adding this method will mean that, the code within it
    // is called when the component is rendered on the screen
    // componentDidUpdate: This method calls itself whenever the component updates
    // itself (ex. when we setState, and the component re-renders itself)
    // componentWillUnmount: can be used to remove our component from rendering on the 
    // screen. Utilized for cleanup.

    // We refactored our season's app to utilize lifecycle methods

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
        //     return <div>Latitude: {this.state.lat}</div>
        // We are passing the state value as a prop to seasonDisplay.
            return <SeasonDisplay lat={this.state.lat} />
        }
        
        return <Spinner message="Please accept location request" />; 
    }

    // We always want to limit the number of return statements within a render method
    // so that if we are ever in a situaion where we had to refactor the render method
    // it would be a lot more simpler
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
            

        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);


