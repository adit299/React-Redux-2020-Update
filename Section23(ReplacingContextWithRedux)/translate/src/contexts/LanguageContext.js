import React from 'react';

const Context = React.createContext('english');

// We have now setup the class as a named export, so to import the component, we have to 
// write out (import { LanguageStore } from '../contexts/LanguageContext');
export class LanguageStore extends React.Component {
    state = { language: 'english' };

    onLanguageChange = (language) => {
        this.setState({ language });
    }

    render() {
        return (
            // Note that the capital C for the component name is very important, it tells
            // react that this is a component that we have created, otherwise it will think it
            // is just a vanilla HTML tag name
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
                {/* Recall that props.children allows us to place whatever is within props between
                two independent opening and closing tags */}
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;



