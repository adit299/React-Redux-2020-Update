import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';





ReactDOM.render(
    // Through the use of the provider, we are passing an instance of the store to
    // all components within app, thus, allowing for access to the state
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,       
    document.querySelector('#root')
);














