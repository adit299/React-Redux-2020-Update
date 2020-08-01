import React from 'react';
import ReactDOM from 'react-dom';
// As opposed to previous projects, we are breaking off our App component into
// its own file as opposed to being a part of index.js
import App from './components/App';

ReactDOM.render(<App />, 
    document.querySelector('#root')
);





