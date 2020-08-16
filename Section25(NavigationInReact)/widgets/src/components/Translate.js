import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';


const options = [
    {
        label: 'Tamil',
        value: 'ta'
    },
    {
        label: 'Malayalam',
        value: 'ml'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];



const Translate = () => {
    // Keeps track of the language selection; the language which we want to translate to 
    // We initialize it with the first langguage value from state 
    const [language, setLanguage] = useState(options[0]);
    
    // Keeps track of the text entered by the user which we want to translate  
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    {/* A text box for us to enter text that we want translated */}
                    <input value={text} onChange={(e) => setText(e.target.value)} /> 
                </div> 
            </div>  
            
            {/* Re-Using the dropdown component we worked on last time, to
            allow for user to select a language to translate to */}
            <Dropdown
                label="Select a language"
                selected={language}
                onSelectedChange={setLanguage} 
                options={options} 
            />
            <hr />
            <h3 className="ui header">Output</h3>
            {/* Whenever text or language changes, we want it to trip the 
            useEffect hook, to trigger the google translate API */}
            <Convert text={text} language={language} />
        </div>
    );
};

export default Translate;










