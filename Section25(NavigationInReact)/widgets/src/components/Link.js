import React from 'react';

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        // Lets us open the link in a new tab by holding ctrl and clicking
        if(event.metaKey || event.ctrlKey) {
            return;
            // event.metaKey and event.ctrlKey is a boolean
            // statement that returns whether that keys is held down
            // if it is held down, the statement returns, and the browser
            // takes over, normally opening in a new tab
        }

        // Prevents the page from refreshing onClick (don't do a full page refresh!)
        event.preventDefault();
        // Change the URL
        window.history.pushState({}, '', href);
        // Communicates to our application that the URL has changed
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);

    };

    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    );
};

export default Link;

