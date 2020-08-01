import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
   renderSubmit(value) {
       return value === 'english' ? 'Submit' : 'സമർപ്പിക്കുക';
   }

   renderButton(color) {
       return (
            <button className={`ui button ${color}`}>
                {/* In here we are wrapping an arrow function with the
                LanguageContext.Consumer jsx tags, which will automatically
                supply to it the value which is within the pipeline (the parameter value) */}
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }
    
    render() {
        return (
            <ColorContext.Consumer>
                {(color) => this.renderButton(color)}
            </ColorContext.Consumer>
        ); 
    }
}

// We could also hookup the context type by writing Button.contextType = LanguageContext after the 
// code within the class

export default Button;


