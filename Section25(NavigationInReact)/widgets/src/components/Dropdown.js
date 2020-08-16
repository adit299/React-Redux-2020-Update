import React, { useState, useEffect, useRef } from 'react';


const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    // We are going to use the open piece of state to detect whether the 
    // dropdown is open or closed
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            // ref.current will return the DOM element that we 
            // created the reference within, and .contains is a
            // standard DOM method which will return a boolean value
            // depending on whether the event originated from within ref
            if (ref.current.contains(event.target)) {
                return;
            }

            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick)

        return () => {
            document.removeEventListener('click', onBodyClick);
        };
    }, []);


    const renderedOptions = options.map((option) => {
        // If a user has selected a dropdown option, we don't want it to
        // show up in the list of options in the dropdown
        if(option.value === selected.value) {
            return null;
        }

        return (
            <div 
              key={option.value} 
              className="item"
              onClick={() => {    
                onSelectedChange(option)
              }}
            >
                {/* When the user clicks on a dropdown menu option, we invoke the onSelectedChange
                function, which updates state (the one we passed in from from App.js) */}

                {/* The update in state causes the App to rerender, correctly showing the updated
                text */}
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                    onClick={() => {setOpen(!open)}} 
                    // These control whether the dropdown is open or closed 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;



