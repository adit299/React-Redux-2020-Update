// Note that the import of React is unnecessary, since this
// component contains no JSX
import { useEffect, useState } from 'react';


// The prop children will contain the component passed to route
// that was wrapped in opening and closing component tags, so 
// for example something like <Route></Route>
const Route = ({ path, children }) => {
    // This state is responsible for keeping track of what path we are currently on
    const [currentPath, setCurrentPath] = useState(window.location.pathname);


    useEffect(() => {
        const onLocationChange = () => {
            // We update our current path
            setCurrentPath(window.location.pathname);
        };
        
        // This listens for when the URL changes
        window.addEventListener('popstate', onLocationChange);

        // Cleanup function to remove the event listener after its use 
        return () => {
            window.removeEventListener('popstate', onLocationChange);
        };
        // Empty array means the code is run only when the component is rendered for the
        // first time only
    }, []);

    return currentPath === path 
    ? children
    : null;
};



export default Route;







