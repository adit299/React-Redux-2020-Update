import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    // Contains the term that the user is searching
    const [term, setTerm] = useState('programming');

    const [debouncedTerm, setDebouncedTerm] = useState(term);


    // Contains the results that we get back from the API
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000)

        return () => {
            clearTimeout(timerId);
        }
    }, [term]);

    useEffect(() => {
        const search = async() => {
            // Note that a async function by default will return a "response" object 
            // We are destructuring out the data parameter from within that object
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                // Recall that axios takes all of the values in params, encodes
                // them to the end of the URL as a query
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });
            setResults(data.query.search);
        };
        search();
    }, [debouncedTerm]);

    // The useEffect hook can stimulate life cycle methods (see my notes
    // for the three situations in which is runs)
    // If we supply an empty array as the second argument, option 1 is run
    // No second argument means that option 2 is run
    // Finally if we have an array with some data, we run after every rerender if
    // data has changed since last render
    
    // // See my notes to see how we handle function calls
    // useEffect(() => {
    //     // We want the search to execute immediately when we first start up the application,
    //     // so this if statement is required
    //     if(term && !results.length) {
    //         search();
    //     } else {
    //         // When the component first renders, we encounter an error since term is empty at that
    //         // point. We also encounter an error if we delete everything in the searchbar. To get
    //         // rid of that error, we use this if statement to detect whether there is any value in term
        
    //         // We are setting a timer of 500ms here, so after the 500ms our code is executed 
    //         const timeoutId = setTimeout(() => {
    //             if(term) {
    //                 search();
    //             }
    //         }, 500);
    //         // Everytime we set a timeOut function, it returns an Id which we can use to refer
    //         // to it, and passing it into the clearTimeout function cancels that timer. See my notes
    //         // for more detailed explanation of the cancel timer workflow
    //         return () => {
    //             clearTimeout(timeoutId);
    //         };
    //     }
    // }, [term, results.length]);

    // We map over the results returned from the API (that we have stored in state) and encompass them in proper JSX
    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    {/* We added a link that takes you to the corresponding wikipedia page
                    for that article */}
                    <a className="ui button"
                       href={`https://en.wikipedia.org/?curid=${result.pageid}`}
                    >
                        Go
                    </a>
                </div>
                    <div className="content">
                        <div className="header">
                            {result.title}
                        </div>
                        <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                    </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input
                        value={term}
                        onChange={(e) => setTerm(e.target.value)} 
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
};

export default Search;


