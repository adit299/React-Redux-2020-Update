import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

// Note that we are using the this.context method of hooking up the context method instead of
// the consumer method since we will only need to be dealing with this one context 
class LanguageSelector extends React.Component {
    static contextType = LanguageContext;

    render() {
        console.log(this.context);
        return (
            <div>
                Select a language/ഒരു ഭാഷ തിരഞ്ഞെടുക്കുക:
                <i className="flag ca" onClick={() => this.context.onLanguageChange('english')}/>
                <i className="flag in" onClick={() => this.context.onLanguageChange('malayalam')} />
            </div>
        );
    }
}

export default LanguageSelector;









