import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
    // This state will store the translated text from the API
    const [translated, setTranslated] = useState('');

    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        // This ensures that we have 500ms break before making an API request, so that 
        // we can prevent unnecessary requests
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    });


    // Whenever a new language or text is selected/entered, we want to run
    // convert and convert that language.

    // See https://cloud.google.com/translate/docs/reference/rest/v2/translate for information
    // what each of the parameters mean

    // Recall that the callback function for useEffect cannot utilize async await syntax, so we
    // have utlized another helper function within useEffect that makes use of the async await
    // syntax
    useEffect(() => {
        const doTranslation = async () => {
            // Recall that data contains the values from the response we made, so we have
            // destructured it out
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', 
            {}, 
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    },
                }
            );
            
            // We update our state with the translated text returned from the API
            setTranslated(data.data.translations[0].translatedText);
        };

        // We invoke the translation method
        doTranslation();
    }, [language, debouncedText]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>

    );
};

export default Convert;


















