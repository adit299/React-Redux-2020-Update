import React from 'react';


// Functional component for the semantic ui loading icon

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
};

// We can give the spinner a default value, in case we forget to supply one to it
Spinner.defaultProps = {
    message: 'Loading...'
};


export default Spinner;



