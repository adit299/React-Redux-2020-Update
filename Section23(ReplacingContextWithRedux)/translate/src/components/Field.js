import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    // Note that contextType is a very special variable name, it has to be called
    // this particular name, otherwise the function will not work
    static contextType = LanguageContext;
    render() {
        const text = this.context.language === 'english' ? 'Name' : 'പേര്';
        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        );
    }
}

export default Field;




