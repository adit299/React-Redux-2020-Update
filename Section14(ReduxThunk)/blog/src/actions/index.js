import jsonPlaceholder from '../apis/jsonPlaceholder';

// We run into several issues, when we use the usual async await syntax in 
// handling our API call
// (1) In reality, the async await syntax is being transpiled into something
// different through the use of babel (recall that babel transpiles all the code
// we write into ES2015 syntax). Thus, in reality, this piece of code is not
// returning a valid javascript object
// (2) Then, we might think the better approach is to then eliminate the async, and
// await syntax to simply make a API call and store it in a variable. However, the issue
// with that alternate approach is that by the time the action gets to a reducer, we won't
// have fetched the data
// This is where the middleware Redux Thunk, comes into play

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response });
};












