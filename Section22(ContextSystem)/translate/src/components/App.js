import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
    state = { language: 'english' };

    // recall that we can use shorthand: { language: language } = { language }
    onLanguageChange = language => {
        this.setState({ language });
    };
    
    static contextType = LanguageContext;
    render() {
        const text = 'Select a language/ഒരു ഭാഷ തിരഞ്ഞെടുക്കുക:'
        return (
            <div className="ui container">
                <div>
                    {text}
                    <i className="flag ca" onClick={() => this.onLanguageChange('english')}/>
                    <i className="flag in" onClick={() => this.onLanguageChange('malayalam')} />
                </div>
                {/* We are passing to the language context, our value of lanuage (from state) */}
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageContext.Provider>  
            </div>
        );
    }
}

export default App;






