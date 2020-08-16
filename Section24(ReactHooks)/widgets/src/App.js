import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end javascript framework'
    },
    {
        title: 'What use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

const showAccordion = () => {
    if(window.location.pathname === '/') {
        return <Accordion items={items} />;
    }
}


export default () => {
    // We want the dropdown to have the first option selected by default, which is why we 
    // pass in options[0]

    // Afterwards, the selected dropdown option will always appear as the first element in the 
    // dropdown
    // const [selected, setSelected] = useState(options[0]);

    // We will use this state to determine if we want to display the dropdown or not
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ? 
                <Dropdown 
                selected={selected}
                onSelectedChange={setSelected}
                options={options} 
                /> : null
            } */}
            {showAccordion()}
        </div>
    );  
};