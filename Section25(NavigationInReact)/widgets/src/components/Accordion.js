import React, { useState } from 'react';

const Accordion = ({ items }) => {
    // This line of code initializes state within the functional component
    // (note that the names are not unique, we can call it whatever we want, but
    // the first name is the value of the state object, the second is the function
    // that sets that state)

    // Technically, when we call useState we are returned two values, a state value (activeIndex)
    // and the function that can handle these state changes. We are destructuring those values out
    // into the array and assigning them those values
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
        // console.log('Title clicked', index);
    };
    
    // In our map function we are receiving both the item, and the index
    // for that item
    const renderedItems = items.map((item, index) => {
        // While iterating through, we check if the current index is equal to the 
        // activeIndex (the one that the user just clicked). If so, we assign a value
        // to it accordingly.
        const active = index === activeIndex ? 'active' : '';
        
        // Recall that every list item in JSX must have a key property
        // We changed the encompassing tag from a div to a React.Fragment, to prevent
        // a rule present in CSS and semantic UI which makes list elements have an extra
        // border ontop
        return ( 
            <React.Fragment key={item.title}>
                <div 
                    className={`title ${active}`}
                    // We console.log the index of the array items
                    
                    // The arrow function is necessary here because we want the function to
                    // execute after a click, without the arrow function, it will execute as soon as 
                    // the element is initialized 
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return <div className="ui styled accordion">
        {renderedItems}
    </div>
};

export default Accordion;








