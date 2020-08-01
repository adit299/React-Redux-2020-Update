// When we do an import statement like the css file below, in reality webpack takes care of
// the logic of attaching the styling to the correct .js elements

import './SeasonDisplay.css'
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, it is cold!',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        // JS Ternary operation, if lat > 0, return summer
        // otherwise, return winter

        // If we are between months 2 and 9, and latitude > 0, then its northern
        // hemisphere, and it is summer otherwise it is winter
        return lat > 0 ? 'summer' : 'winter';

    } else {
        // Handles the other cases
        return lat > 0 ? 'winter' : 'summer';
    }

};

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    
    // Examples of ternary operations (translates to if it is winter, text =  burr, it is chilly!)
    // but otherwise, text = let's hit the beach
    // const text = season === 'winter' ? 'Burr, it is chilly!' : 'Lets hit the beach!';
    // const icon = season === 'winter' ? 'snowflake' : 'sun'; 
    // We can get rid of these ternary operations to something more simple, as folows (making use
    // of ES2015 syntax)

    const { text, iconName } = seasonConfig[season];
    
    return (
        // Optional syntax: we can name the CSS styling being applied to the root element, the
        // same name as the functional component, for less confusion
        <div className={`season-display  ${season}`}>
            {/* The backticks allow us to access the value in the icon variable
            and create a string with that icon name followed by icon */}
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
}

export default SeasonDisplay;